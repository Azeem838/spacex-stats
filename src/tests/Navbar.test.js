import React from 'react';
import { render, getAllByTestId } from '@testing-library/react';
import { toBeInTheDocument, toHaveStyle } from '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Navbar from '../containers/Navbar';

expect.extend({ toBeInTheDocument, toHaveStyle });

test('Navbar is displaying all links correctly', () => {
  const obj = {
    rockets: [
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
    ],
  };

  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);

  const store = mockStore(obj);

  render(
    <Provider store={store}>
      <Router>
        <Navbar />
      </Router>
    </Provider>,
  );

  const upcomingTab = getAllByTestId(document.documentElement, 'upcoming-tab');
  const allTab = getAllByTestId(document.documentElement, 'all-tab');
  const previousTab = getAllByTestId(document.documentElement, 'previous-tab');
  const falcon1Tab = getAllByTestId(document.documentElement, 'Falcon 1-tab');
  const falcon9Tab = getAllByTestId(document.documentElement, 'Falcon 9-tab');
  const falconHeavyTab = getAllByTestId(
    document.documentElement,
    'Falcon Heavy-tab',
  );
  const starshipTab = getAllByTestId(document.documentElement, 'Starship-tab');

  expect(allTab).toHaveLength(2);
  expect(upcomingTab).toHaveLength(2);
  expect(previousTab).toHaveLength(2);
  expect(falcon1Tab).toHaveLength(2);
  expect(falcon9Tab).toHaveLength(2);
  expect(falconHeavyTab).toHaveLength(2);
  expect(starshipTab).toHaveLength(2);
});
