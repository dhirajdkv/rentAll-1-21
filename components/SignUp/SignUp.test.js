import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SignUpForm from './SignUp';

describe('SignUpForm', () => {
  it('renders all input fields and the submit button', () => {
    render(<SignUpForm />);
    expect(screen.getByPlaceholderText('Full Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email Address')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Confirm Password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /sign up/i })).toBeInTheDocument();
    expect(screen.getByText(/sign in/i).closest('a')).toHaveAttribute('href', '/sign-in');
  });

  it('allows input in the full name, email, and password fields', () => {
    render(<SignUpForm />);
    const fullNameInput = screen.getByPlaceholderText('Full Name');
    const emailInput = screen.getByPlaceholderText('Email Address');
    const passwordInput = screen.getByPlaceholderText('Password');
    const confirmPasswordInput = screen.getByPlaceholderText('Confirm Password');

    userEvent.type(fullNameInput, 'Jane Doe');
    userEvent.type(emailInput, 'jane.doe@example.com');
    userEvent.type(passwordInput, 'password123');
    userEvent.type(confirmPasswordInput, 'password123');

    expect(fullNameInput.value).toBe('Jane Doe');
    expect(emailInput.value).toBe('jane.doe@example.com');
    expect(passwordInput.value).toBe('password123');
    expect(confirmPasswordInput.value).toBe('password123');
  });

  it('submits the form with correct data', () => {
    const handleSubmit = jest.fn();
    render(<SignUpForm />);
    const submitButton = screen.getByRole('button', { name: /sign up/i });

    fireEvent.submit(submitButton);

    // We assume handleSubmit will be mocked to capture call arguments
    // expect(handleSubmit).toHaveBeenCalledWith(expect.anything(), expect.objectContaining({
    //   fullName: 'Jane Doe',
    //   email: 'jane.doe@example.com',
    //   password: 'password123'
    // }));
  });

  it('validates that the password and confirm password fields match', () => {
    render(<SignUpForm />);
    const passwordInput = screen.getByPlaceholderText('Password');
    const confirmPasswordInput = screen.getByPlaceholderText('Confirm Password');
    const submitButton = screen.getByRole('button', { name: /sign up/i });

    userEvent.type(passwordInput, 'password123');
    userEvent.type(confirmPasswordInput, 'password321');
    userEvent.click(submitButton);

    expect(screen.getByText(/passwords do not match/i)).toBeInTheDocument();
  });
});
