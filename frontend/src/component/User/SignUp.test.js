import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import SignUp from './SignUp'; // Adjust the import path as necessary
import { toast } from 'react-toastify';

jest.mock('react-toastify', () => ({
  toast: {
    error: jest.fn(),
    success: jest.fn(),
  }
}));

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('SignUp Component', () => {
    let store;

    beforeEach(() => {
        store = mockStore({
            user: {
                isEmailSend: false,
                isAuthenticated: false,
                error: null,
                status: 'idle'
            }
        });
    });

    const renderComponent = () => render(
        <Provider store={store}>
            <Router>
                <SignUp />
            </Router>
        </Provider>
    );

    test('renders SignUp form fields', () => {
        renderComponent();
        expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
        expect(screen.getByText('Choose File')).toBeInTheDocument();
    });

    test('allows user to enter text in input fields', () => {
        renderComponent();
        const nameInput = screen.getByPlaceholderText('Name');
        fireEvent.change(nameInput, { target: { value: 'John Doe' } });
        expect(nameInput.value).toBe('John Doe');

        const emailInput = screen.getByPlaceholderText('Email');
        fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
        expect(emailInput.value).toBe('john@example.com');

        const passwordInput = screen.getByPlaceholderText('Password');
        fireEvent.change(passwordInput, { target: { value: 'password123' } });
        expect(passwordInput.value).toBe('password123');
    });

    test('submits form and dispatches registerUser action', async () => {
        const formData = {
            name: 'John Doe',
            email: 'john@example.com',
            password: 'password123',
            avatar: new File(['avatar'], 'avatar.png', { type: 'image/png' })
        };

        renderComponent();
        fireEvent.change(screen.getByPlaceholderText('Name'), { target: { value: formData.name } });
        fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: formData.email } });
        fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: formData.password } });
        const fileInput = screen.getByLabelText('Choose File');
        fireEvent.change(fileInput, { target: { files: [formData.avatar] } });

        fireEvent.click(screen.getByText('Sign UP'));

        await waitFor(() => {
            const actions = store.getActions();
            expect(actions.some(action => action.type === 'user/registerUser')).toBeTruthy();
        });
    });

    // Additional tests for error handling, redirection, and image upload logic can be added similarly.
});
