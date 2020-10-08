import React from 'react';
import { render, getByTestId } from '@testing-library/react';
import { toBeInTheDocument, toHaveStyle } from '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Launches from '../containers/Launches';
import { loadRockets, loadLaunches } from '../actions/index';

expect.extend({ toBeInTheDocument, toHaveStyle });

const mockState = {
  launches: [
    {
      name: 'CRS-21',
      details: 'Launch of CRS-21',
      image: 'hello',
      links: { flickr: { original: ['hello'] } },
    },
  ],

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
  filter: 'all',
};

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initialState = {
  launches: [],
  rockets: [{ id: null, name: '', images: [] }],
};

it('should execute loadRockets', () => {
  const store = mockStore(initialState);

  return store.dispatch(loadRockets()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toBeInstanceOf(Object);
  });
});

it('should execute loadLaunches', () => {
  const store = mockStore(initialState);

  return store.dispatch(loadLaunches()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toBeInstanceOf(Object);
  });
});

it('should have the required elements with content', () => {
  const store = mockStore(mockState);

  render(
    <Provider store={store}>
      <Router>
        <Launches />
      </Router>
    </Provider>,
  );

  const launchesContainer = getByTestId(
    document.documentElement,
    'launches-container',
  );

  expect(launchesContainer).toBeInTheDocument();
});
