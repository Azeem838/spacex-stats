import React from 'react';
import { render, getByTestId } from '@testing-library/react';
import { toBeInTheDocument, toHaveStyle } from '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../containers/Navbar';

expect.extend({ toBeInTheDocument, toHaveStyle });

test('Navbar is displaying all links correctly', () => {
  render(
    <Router>
      <Navbar />
    </Router>,
  );

  const logoLink = getByTestId(document.documentElement, 'logo-link');
  const launchesLink = getByTestId(document.documentElement, 'launches-link');
  const dragonsLink = getByTestId(document.documentElement, 'dragons-link');
  const rocketsLink = getByTestId(document.documentElement, 'rockets-link');
  const shipsLink = getByTestId(document.documentElement, 'ships-link');
  const landpadsLink = getByTestId(document.documentElement, 'landpads-link');

  expect(logoLink).toBeInTheDocument();
  expect(launchesLink).toBeInTheDocument();
  expect(dragonsLink).toBeInTheDocument();
  expect(rocketsLink).toBeInTheDocument();
  expect(shipsLink).toBeInTheDocument();
  expect(landpadsLink).toBeInTheDocument();
});
