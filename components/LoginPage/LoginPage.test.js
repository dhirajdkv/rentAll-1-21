import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginPage from './LoginPage'; 

describe('LoginPage', () => {
  it('should render email and password input fields', () => {
    render(<LoginPage />);
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
  });

  it('should allow entering email and password', () => {
    render(<LoginPage />);
    const emailInput = screen.getByPlaceholderText(/email/i);
    const passwordInput = screen.getByPlaceholderText(/password/i);

    userEvent.type(emailInput, 'test@example.com');
    userEvent.type(passwordInput, 'password123');

    expect(emailInput).toHaveValue('test@example.com');
    expect(passwordInput).toHaveValue('password123');
  });

  it('should handle form submission', () => {
    const handleSubmit = jest.fn();
    render(<LoginPage onSubmit={handleSubmit} />);
    const submitButton = screen.getByRole('button', { name: /submit/i });

    userEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalled();
  });

  it('should display error message when email is invalid', async () => {
    render(<LoginPage />);
    const emailInput = screen.getByPlaceholderText(/email/i);
    const submitButton = screen.getByRole('button', { name: /submit/i });

    userEvent.type(emailInput, 'invalid-email');
    userEvent.click(submitButton);

    const errorMsg = await screen.findByText(/invalid email address/i);
    expect(errorMsg).toBeInTheDocument();
  });

  // New Test Case: Password input should hide contents
  it('should hide password input contents', () => {
    render(<LoginPage />);
    const passwordInput = screen.getByPlaceholderText(/password/i);
    expect(passwordInput).toHaveAttribute('type', 'password');
  });

//   New Test Case: Form submission with Enter key in password field
  it('should submit form on Enter key in password field', () => {
    const handleSubmit = jest.fn();
    render(<LoginPage onSubmit={handleSubmit} />);
    const passwordInput = screen.getByPlaceholderText(/password/i);

    userEvent.type(passwordInput, 'password123{enter}');

    expect(handleSubmit).toHaveBeenCalled();
  });
});
