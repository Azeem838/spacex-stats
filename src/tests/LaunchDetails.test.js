import React from 'react';
import { render, getByTestId, fireEvent } from '@testing-library/react';
import { toBeInTheDocument, toHaveStyle } from '@testing-library/jest-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Launch from '../containers/LaunchDetails';
import Card from '../components/Card';

expect.extend({ toBeInTheDocument, toHaveStyle });

const mockProps = {
  launches: [
    {
      date_utc: '2006-03-24T22:30:00.000Z',
      details: 'Engine failure at 33 seconds and loss of vehicle',
      flight_number: 1,
      id: '5eb87cd9ffd86e000604b32a',
      name: 'FalconSat',
      links: {
        article:
          'https://www.space.com/2196-spacex-inaugural-falcon-1-rocket-lost-launch.html',
        flickr: {
          original: [],
          small: [],
        },
        patch: {
          large: 'https://images2.imgbox.com/40/e3/GypSkayF_o.png',
          small: 'https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png',
        },
        reddit: {
          media: null,
          launch: null,
        },
        youtube_id: '0a_00nJ_Y88',
      },
    },
  ],
};

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

it('should display the Loading sign information', () => {
  const store = mockStore(mockProps);

  render(
    <Provider store={store}>
      <BrowserRouter>
        <Card data={mockProps.launches[0]} />
        <Route component={Launch} />
      </BrowserRouter>
    </Provider>,
  );

  const readMore = getByTestId(document.documentElement, 'read-more');
  fireEvent.click(readMore);
});
