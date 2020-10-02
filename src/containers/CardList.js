import React from 'react';
import PropTypes from 'prop-types';
import Card from '../components/Card';

const CardList = ({ launches, filter }) => {
  if (launches.length !== 0) {
    let filterLaunches;
    if (filter === '' || filter === 'all') {
      filterLaunches = launches;
    } else if (filter === 'previous') {
      filterLaunches = launches.filter(launch => launch.upcoming === false);
    } else if (filter === 'upcoming') {
      filterLaunches = launches.filter(launch => launch.upcoming === true);
    } else {
      filterLaunches = launches.filter(launch => launch.rocket === filter);
    }
    const cardList = filterLaunches.map(launch => (
      <Card data={launch} key={launch.id + Math.random()} />
    ));

    return (
      <div data-testid="with-props" className="launch-contain container">
        {cardList}
      </div>
    );
  }
  return null;
};

CardList.propTypes = {
  launches: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.string.isRequired,
};

export default CardList;
