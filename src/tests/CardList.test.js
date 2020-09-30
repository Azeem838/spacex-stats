import React from 'react';
import { render, getByTestId, queryByTestId } from '@testing-library/react';
import { toBeInTheDocument, toHaveStyle } from '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import CardList from '../containers/CardList';

expect.extend({ toBeInTheDocument, toHaveStyle });

test('CardList is displayed with data', () => {
  const filter = 'all';

  const launches = [
    {
      upcoming: true,
      rocket: 'efwefwef',
      id: 'wefwefwefwefrebghser',
      links: {
        flickr: {
          original: ['hello'],
        },
        patch: { small: 'world' },
      },
      name: 'Starlink',
      details: 'This is a starlink launch',
    },
    {
      upcoming: false,
      rocket: 'efwe15fwef',
      id: 'wefwefwe786fwefrebgh786ser',
      links: {
        flickr: {
          original: ['test'],
        },
        patch: { small: 'test' },
      },
      name: 'Falcon 1',
      details: 'This is a Falcon 1 launch',
    },
  ];

  render(
    <Router>
      <CardList launches={launches} filter={filter} />
    </Router>,
  );

  expect(
    queryByTestId(document.documentElement, 'without-props'),
  ).not.toBeInTheDocument();

  expect(
    getByTestId(document.documentElement, 'with-props'),
  ).toBeInTheDocument();
});

test('CardList displays Loading... without data', () => {
  const filter = '';

  const launches = [];

  render(
    <Router>
      <CardList launches={launches} filter={filter} />
    </Router>,
  );

  expect(
    queryByTestId(document.documentElement, 'with-props'),
  ).not.toBeInTheDocument();

  expect(
    getByTestId(document.documentElement, 'without-props'),
  ).toBeInTheDocument();
});
