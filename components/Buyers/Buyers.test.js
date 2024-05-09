import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Buyers from './Buyers';

describe('Buyers Component', () => {
  it('renders without crashing', () => {
    render(<Buyers />);
    expect(screen.getByTestId('buyers-container')).toBeInTheDocument();
  });

  it('renders non-empty content', () => {
    render(<Buyers />);
    expect(screen.getByTestId('buyers-container')).not.toBeEmptyDOMElement();
  });

  it('allows basic interaction', () => {
    render(<Buyers />);
    const firstBuyer = screen.getByTestId('buyer-item'); // Assuming you have 'buyer-item' data-testid on each buyer
    expect(() => {
      fireEvent.click(firstBuyer);
    }).not.toThrow();
  });
});
