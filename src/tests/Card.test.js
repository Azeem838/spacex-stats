import React from 'react';
import { render, getByText, getByAltText } from '@testing-library/react';
import { toBeInTheDocument, toHaveStyle } from '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Card from '../components/Card';

expect.extend({ toBeInTheDocument, toHaveStyle });

const data = {
  id: 'efwefef5484',
  links: {
    flickr: {
      original: ['hello'],
    },
    patch: { small: 'world' },
  },
  name: 'Starlink',
  details: 'This is a starlink launch',
};

test('card is displayed', () => {
  const { container } = render(
    <Router>
      <Card data={data} />
    </Router>,
  );

  const title = getByText(container, 'Starlink');
  const details = getByText(container, 'This is a starlink launch...');
  const img = getByAltText(container, 'Launch');
  const readMore = getByText(container, 'Read More');

  expect(title).toBeInTheDocument();
  expect(details).toBeInTheDocument();
  expect(img).toBeInTheDocument();
  expect(readMore).toBeInTheDocument();
});
