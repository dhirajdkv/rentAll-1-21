import React from 'react';
import { render, screen } from '@testing-library/react';
import ProfilePage from './ProfilePage';

describe('ProfilePage', () => {
  it('loads the profile page without errors', () => {
    expect(() => render(<ProfilePage />)).not.toThrow();
  });

  it('contains essential elements', () => {
    render(<ProfilePage />);
    expect(screen.getByTestId('profile-picture')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /update/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/Your Bio/i)).toBeInTheDocument();  // Assuming label text is present
  });

});
