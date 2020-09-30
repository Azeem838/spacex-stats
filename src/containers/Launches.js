import React from 'react';
import { withRouter } from 'react-router-dom';
import CardList from './CardList';

const Launches = () => (
  <div>
    <CardList />
  </div>
);

export default withRouter(Launches);
