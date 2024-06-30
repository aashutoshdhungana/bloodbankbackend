import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import axios from 'axios';
import BloodRequest from '../pages/BloodRequest/BloodRequest'; // Adjust the import path as necessary
import '@testing-library/jest-dom'

const mockStore = configureStore([]);

jest.mock('axios');

describe('BloodRequest Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      user: {
        isLoggedIn: true,
        user: {
          id: 1,
          name: 'John Doe',
          email: 'john@example.com',
          bloodtype: 1,
        },
      },
    });
  });

  test('renders BloodRequest form correctly', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path="/" element={<BloodRequest />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Contact Number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Blood Type Needed/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Quantity Needed \(Units\)/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Additional Message/i)).toBeInTheDocument();
  });

  test('shows validation errors when submitting empty form', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path="/" element={<BloodRequest />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    fireEvent.click(screen.getByRole('button', { name: /Place Request/i }));

    expect(await screen.findByText(/Contact number is required/i)).toBeInTheDocument();
  });

  test('submits form with valid data', async () => {
    axios.post.mockResolvedValue({ status: 201 });

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path="/" element={<BloodRequest />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    fireEvent.change(screen.getByLabelText(/Contact Number/i), {
      target: { value: '1234567890' },
    });
    fireEvent.change(screen.getByLabelText(/Blood Type Needed/i), {
      target: { value: '1' },
    });
    fireEvent.change(screen.getByLabelText(/Quantity Needed \(Units\)/i), {
      target: { value: '2' },
    });

    fireEvent.click(screen.getByRole('button', { name: /Place Request/i }));

    await waitFor(() => {
      expect(global.alert).toHaveBeenCalledWith('Blood request placed successfully!');
    });
  });

  test('redirects to login page if user is not logged in', () => {
    store = mockStore({
      user: {
        isLoggedIn: false,
        user: {},
      },
    });

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path="/" element={<BloodRequest />} />
            <Route path="/login-page" element={<div>Login Page</div>} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Login Page/i)).toBeInTheDocument();
  });
});