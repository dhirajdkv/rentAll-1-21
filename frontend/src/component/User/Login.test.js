import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Login from './Login';
import { initialState } from '../../slices/userSlice/userSlice'; // Adjust path as necessary

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Login Component', () => {
    let store;

    beforeEach(() => {
        store = mockStore({
            user: initialState
        });
    });

    const renderComponent = () => render(
        <Provider store={store}>
            <Router>
                <Login />
            </Router>
        </Provider>
    );

    test('renders login form', () => {
        renderComponent();
        expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
        expect(screen.getByText('Login')).toBeInTheDocument();
    });

    test('submits form with user data', async () => {
        renderComponent();
        fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'testuser@gmail.com' } });
        fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: '12345678' } });
        fireEvent.click(screen.getByText('Login'));

        await waitFor(() => {
            expect(store.getActions()).toContainEqual(loginUser({
                email: 'testuser@gmail.com',
                password: '12345678'
            }));
        });
    });

    test('navigates to home on successful login', async () => {
        store = mockStore({
            user: {
                ...initialState,
                isAuthenticated: true
            }
        });
        renderComponent();

        await waitFor(() => {
            expect(screen.getByText('Go to Home')).toBeInTheDocument();
        });
    });

    test('shows error on failed login', async () => {
        store = mockStore({
            user: {
                ...initialState,
                error: 'Login failed'
            }
        });
        renderComponent();

        await waitFor(() => {
            expect(screen.getByText('Login failed')).toBeInTheDocument();
        });
    });
});
