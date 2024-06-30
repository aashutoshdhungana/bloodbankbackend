import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import LoginPage from '../pages/Login/LoginPage'; // Adjust the import path as necessary
import { updateUserData, logIn } from '../store/slices/UserSlice';
import '@testing-library/jest-dom'

const mockStore = configureStore([]);

describe('LoginPage Component', () => {
  let store;
  let axiosMock;

  beforeEach(() => {
    store = mockStore({
      user: {
        isLoggedIn: false,
        user: {},
      },
    });

    axiosMock = new MockAdapter(axios);

    // Mock localStorage.setItem method
    global.localStorage.setItem = jest.fn();
  });

  afterEach(() => {
    axiosMock.restore();
  });

  test('renders LoginPage form correctly', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/login']}>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Login/i })).toBeInTheDocument();
  });

  test('shows error message on failed login attempt', async () => {
    axiosMock.onPost('/api/auth/login').reply(401);

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/login']}>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/Password/i), {
      target: { value: 'wrongpassword' },
    });

    fireEvent.click(screen.getByRole('button', { name: /Login/i }));

    await waitFor(() => {
      expect(global.alert).toHaveBeenCalledWith('Faild to login.');
    });
  });


  test('navigates to registration page on button click', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/login']}>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registration-page" element={<div>Registration Page</div>} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    fireEvent.click(screen.getByText(/Register Here/i));

    expect(screen.getByText(/Registration Page/i)).toBeInTheDocument();
  });
});