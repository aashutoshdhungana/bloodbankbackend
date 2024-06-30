// src/test/AdminCount.test.js
import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react'
import '@testing-library/jest-dom'

import AdminCount from '../pages/Admin/AdminCount';  // Adjust the path as necessary

// Mock data for blood counts
const mockBloodCount = {
  'A+': 10,
  'B+': 20,
  'O+': 30,
  'AB+': 40,
  'A-': 5,
  'B-': 15,
  'O-': 25,
  'AB-': 35,
};

test('renders AdminCount component with correct blood counts', () => {
  render(<AdminCount bloodCount={mockBloodCount} />);

  // Check if the counts are rendered correctly
  expect(screen.getByTestId('apcount')).toHaveTextContent(mockBloodCount['A+']);
  expect(screen.getByTestId('bpcount')).toHaveTextContent(mockBloodCount['B+']);
  expect(screen.getByTestId('opcount')).toHaveTextContent(mockBloodCount['O+']);
  expect(screen.getByTestId('abcount')).toHaveTextContent(mockBloodCount['AB+']);
  expect(screen.getByTestId('ancount')).toHaveTextContent(mockBloodCount['A-']);
  expect(screen.getByTestId('bncount')).toHaveTextContent(mockBloodCount['B-']);
  expect(screen.getByTestId('oncount')).toHaveTextContent(mockBloodCount['O-']);
  expect(screen.getByTestId('abncount')).toHaveTextContent(mockBloodCount['AB-']);
});
