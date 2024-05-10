import React from 'react';
import { render, screen } from '@testing-library/react';
import NavBar from './Navbar';
import { FaSearch, FaHeart, FaUser } from 'react-icons/fa';

describe('NavBar Component', () => {
  beforeEach(() => {
    render(<NavBar />);
  });

  it('renders correctly', () => {
    expect(screen.getByText('rent.All')).toBeInTheDocument();
    expect(screen.getByText('Buyer')).toBeInTheDocument();
    expect(screen.getByText('Seller')).toBeInTheDocument();
    expect(screen.getByText('Requests')).toBeInTheDocument();
  });

  it('navigation links point to the correct paths', () => {
    expect(screen.getByText('Buyer').closest('a')).toHaveAttribute('href', '/buyer');
    expect(screen.getByText('Seller').closest('a')).toHaveAttribute('href', '/seller');
    expect(screen.getByText('Requests').closest('a')).toHaveAttribute('href', '/requests');
  });

  it('includes a search input', () => {
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
  });

  it('renders all icons', () => {
    // These tests assume the icons can be selected uniquely; may need a more specific selector or additional attributes
    expect(screen.getByTestId('FaSearchIcon')).toBeInTheDocument(); // Assuming you add data-testid="FaSearchIcon" to the icon
    expect(screen.getByTestId('FaHeartIcon')).toBeInTheDocument(); // Assuming you add data-testid="FaHeartIcon" to the icon
    expect(screen.getByTestId('FaUserIcon')).toBeInTheDocument(); // Assuming you add data-testid="FaUserIcon" to the icon
  });
});
