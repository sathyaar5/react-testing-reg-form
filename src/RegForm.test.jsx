import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import RegistrationForm from './RegForm';

test('renders registration form with username, email, and password fields', () => {
  const { getByLabelText } = render(<RegistrationForm />);
  
  expect(getByLabelText('Username')).toBeInTheDocument();
  expect(getByLabelText('Email')).toBeInTheDocument();
  expect(getByLabelText('Password')).toBeInTheDocument();
});

test('displays error message when form is submitted with empty fields', () => {
  const { getByText } = render(<RegistrationForm />);
  const submitButton = getByText('Register');

  fireEvent.click(submitButton);

  expect(getByText('Please fill in all fields')).toBeInTheDocument();
});

test('calls onSubmit with username, email, and password when form is submitted with valid input', () => {
  const handleSubmit = jest.fn();
  const { getByLabelText, getByText } = render(<RegistrationForm onSubmit={handleSubmit} />);
  const usernameInput = getByLabelText('Username');
  const emailInput = getByLabelText('Email');
  const passwordInput = getByLabelText('Password');
  const submitButton = getByText('Register');

  fireEvent.change(usernameInput, { target: { value: 'testuser' } });
  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
  fireEvent.click(submitButton);

  expect(handleSubmit).toHaveBeenCalledTimes(1);
  expect(handleSubmit).toHaveBeenCalledWith({
    username: 'testuser',
    email: 'test@example.com',
    password: 'testpassword'
  });
});
