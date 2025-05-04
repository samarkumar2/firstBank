import React,{act} from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './Header';

describe('Header Component', () => {
  test('renders Overview text', () => {
    act(() => {
      render(<Header />);
    });
    const overviewElement = screen.getByText(/Overview/i);
    expect(overviewElement).toBeInTheDocument();
  });

  test('renders SearchIcon', () => {
    act(() => {
      render(<Header />);
    });
    const searchIcon = screen.getByTestId('SearchIcon');
    expect(searchIcon).toBeInTheDocument();
  });

  test('renders SettingsIcon', () => {
    act(() => {
      render(<Header />);
    });
    const settingsIcon = screen.getByTestId('SettingsIcon');
    expect(settingsIcon).toBeInTheDocument();
  });

  test('renders NotificationsActiveOutlinedIcon', () => {
    act(() => {
      render(<Header />);
    });
    const notificationsIcon = screen.getByTestId('NotificationsActiveOutlinedIcon');
    expect(notificationsIcon).toBeInTheDocument();
  });

  test('renders AccountBoxIcon', () => {
    act(() => {
      render(<Header />);
    });
    const accountBoxIcon = screen.getByTestId('AccountBoxIcon');
    expect(accountBoxIcon).toBeInTheDocument();
  });
});
