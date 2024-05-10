import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddProductForm from './AddProduct';

describe('AddProductForm Component', () => {
  beforeEach(() => {
    render(<AddProductForm />);
  });

  it('renders all form fields and the submit button', () => {
    expect(screen.getByPlaceholderText('Enter the item name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Cost')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Location')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('From Date')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('To Date')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter the Description of the Product')).toBeInTheDocument();
    expect(screen.getByText('Rent Now!')).toBeInTheDocument();
    expect(screen.getByLabelText('Add image of the item')).toBeInTheDocument();
  });

  it('updates state correctly when fields are changed', () => {
    const itemNameInput = screen.getByPlaceholderText('Enter the item name');
    userEvent.type(itemNameInput, 'Mountain Bike');
    expect(itemNameInput.value).toBe('Mountain Bike');

    const costInput = screen.getByPlaceholderText('Cost');
    userEvent.type(costInput, '15');
    expect(costInput.value).toBe('15');
  });

  it('handles image file input correctly', () => {
    const file = new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' });
    const imageInput = screen.getByLabelText('Add image of the item').querySelector('input[type="file"]');
    userEvent.upload(imageInput, file);
    expect(imageInput.files[0]).toBe(file);
    expect(imageInput.files.item(0)).toBe(file);
    expect(imageInput.files).toHaveLength(1);
  });

  it('validates date range correctly', () => {
    const fromDateInput = screen.getByPlaceholderText('From Date');
    const toDateInput = screen.getByPlaceholderText('To Date');
    userEvent.type(fromDateInput, '2023-01-02');
    userEvent.type(toDateInput, '2023-01-01'); // endDate before startDate
    const submitButton = screen.getByText('Rent Now!');
    userEvent.click(submitButton);
    expect(screen.getByText(/From date must be before To date/i)).toBeInTheDocument();
  });





});
