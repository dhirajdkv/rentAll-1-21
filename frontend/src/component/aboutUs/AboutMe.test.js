import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import AboutMe from './AboutMe';

describe('AboutMe Component', () => {
  it('renders the text correctly', () => {
    render(<Router><AboutMe /></Router>);  // Use Router to avoid issues with Link
    expect(screen.getByText('Developers of rentAll Project')).toBeInTheDocument();
  });

  it('renders the portfolio link with the correct URL', () => {
    render(<Router><AboutMe /></Router>);
    const portfolioLink = screen.getByText('Visit my portfolio');
    expect(portfolioLink).toBeInTheDocument();
    expect(portfolioLink.closest('a')).toHaveAttribute('href', 'https://github.com/dhirajdkv/');
  });

  it('applies correct styling', () => {
    render(<Router><AboutMe /></Router>);
    expect(screen.getByText('Developers of rentAll Project').className).toContain('font-bold');
    expect(screen.getByText('Visit my portfolio').className).toContain('text-cyan-500');
  });
});
