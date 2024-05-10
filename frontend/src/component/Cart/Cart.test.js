import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import Cart from './Cart';
import configureStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';

const mockStore = configureStore([]);

describe('Cart Component', () => {
  let store;

  const setup = (isAuthenticated) => {
    store = mockStore({
      user: { isAuthenticated }
    });
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Cart />
        </MemoryRouter>
      </Provider>
    );
  };

  it('renders LoggedInComponenet when user is authenticated', () => {
    setup(true);
    expect(screen.getByTestId('LoggedInComponenet')).toBeInTheDocument();
  });

  it('shows login prompt when user is not authenticated', () => {
    setup(false);
    expect(screen.getByText('Missing Cart items?')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /cartImage/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Login/i })).toBeInTheDocument();
  });

  it('navigates to login on button click', () => {
    setup(false);
    fireEvent.click(screen.getByRole('button', { name: /Login/i }));
    // Assuming you have logic in place to check navigation
    expect(screen.getByTestId('location-display')).toHaveTextContent('/user/login');
  });

  it('passes current pathname as state to the login link', () => {
    setup(false);
    const loginLink = screen.getByRole('link', { name: /Login/i });
    expect(loginLink).toHaveAttribute('to', '/user/login');
    expect(loginLink.state).toBe('/current-pathname'); // Assuming you mock useLocation
  });
});

