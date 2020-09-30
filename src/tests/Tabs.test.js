import React from 'react';
import { render, getByTestId, fireEvent } from '@testing-library/react';
import { toBeInTheDocument, toHaveStyle } from '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Tabs from '../containers/Tabs';

expect.extend({ toBeInTheDocument, toHaveStyle });

test('All Tabs are displaying correctly', () => {
  const rockets = [
    {
      id: '5e9d0d95eda69955f709d1eb',
      images: ['hello', 'world'],
      name: 'Falcon 1',
    },
    {
      id: '5e9d0d95eda69973a809d1ec',
      images: ['hello', 'world'],
      name: 'Falcon 9',
    },
    {
      id: '5e9d0d95eda69974db09d1ed',
      images: ['hello', 'world'],
      name: 'Falcon Heavy',
    },
    {
      id: '5e9d0d96eda699382d09d1ee',
      images: ['hello', 'world'],
      name: 'Starship',
    },
  ];

  const handleFilter = jest.fn();

  render(
    <Router>
      <Tabs handleFilter={handleFilter} rockets={rockets} />
    </Router>,
  );

  const upcomingTab = getByTestId(document.documentElement, 'upcoming-tab');
  const allTab = getByTestId(document.documentElement, 'all-tab');
  const previousTab = getByTestId(document.documentElement, 'previous-tab');
  const falcon1Tab = getByTestId(document.documentElement, 'Falcon 1-tab');
  const falcon9Tab = getByTestId(document.documentElement, 'Falcon 9-tab');
  const falconHeavyTab = getByTestId(
    document.documentElement,
    'Falcon Heavy-tab',
  );
  const starshipTab = getByTestId(document.documentElement, 'Starship-tab');

  fireEvent.click(upcomingTab);

  expect(allTab).toBeInTheDocument();
  expect(upcomingTab).toBeInTheDocument();
  expect(previousTab).toBeInTheDocument();
  expect(falcon1Tab).toBeInTheDocument();
  expect(falcon9Tab).toBeInTheDocument();
  expect(falconHeavyTab).toBeInTheDocument();
  expect(starshipTab).toBeInTheDocument();
});
