
import React,{act} from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import QuickTransfer from '../pages/dashboard/QuickTransfer';

test('renders QuickTransfer component', () => {
  act(() => {
    render(<QuickTransfer />);
  });
  
  // Check if the card is rendered
  const cardElement = screen.getByTestId('card');
  expect(cardElement).toBeInTheDocument();
  
  // Check if the amount input is rendered with the correct initial value
  const amountInput = screen.getByTestId('write-amount-input');
  expect(amountInput).toBeInTheDocument();
  expect(amountInput).toHaveValue(525.50);
  
  // Check if the amount input changes value
  fireEvent.change(amountInput, { target: { value: 1000 } });
  expect(amountInput).toHaveValue(1000);
  
  // Check if the Payment component is rendered
  const paymentComponent = screen.getByTestId('payment-component');
  expect(paymentComponent).toBeInTheDocument();
});
