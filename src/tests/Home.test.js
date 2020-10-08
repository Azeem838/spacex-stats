import React from 'react';
import { render, getByTestId } from '@testing-library/react';
import { toBeInTheDocument, toHaveStyle } from '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Home from '../containers/Home';
import { loadRockets } from '../actions/index';

expect.extend({ toBeInTheDocument, toHaveStyle });

const rockets = {
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

const initialState = {
  rockets: [{ id: null, name: '', images: [] }],
};

it('should execute loadRockets', () => {
  const store = mockStore(initialState);

  return store.dispatch(loadRockets()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toBeInstanceOf(Object);
  });
});

it('should have the required elements', () => {
  const store = mockStore(rockets);

  render(
    <Provider store={store}>
      <Router>
        <Home loadRockets={loadRockets} rockets={rockets} />
      </Router>
    </Provider>,
  );

  const homeTitle = getByTestId(document.documentElement, 'home-title');
  const homeDetails = getByTestId(document.documentElement, 'home-details');
  const homeImages = getByTestId(document.documentElement, 'home-images');

  expect(homeTitle).toBeInTheDocument();
  expect(homeDetails).toBeInTheDocument();
  expect(homeImages).toBeInTheDocument();
});
