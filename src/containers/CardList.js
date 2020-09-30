import React from 'react';
import PropTypes from 'prop-types';
import Card from '../components/Card';

const CardList = ({ launches, filter }) => {
  if (Object.getOwnPropertyNames(launches).length !== 0) {
    let filterLaunches;
    if (filter === '' || filter === 'all') {
      filterLaunches = launches.slice(1).slice(-10);
    } else if (filter === 'previous') {
      filterLaunches = launches
        .filter(launch => launch.upcoming === false)
        .slice(1)
        .slice(-10);
    } else if (filter === 'upcoming') {
      filterLaunches = launches.filter(launch => launch.upcoming === true);
    } else {
      filterLaunches = launches.filter(launch => launch.rocket === filter);
    }
    const cardList = filterLaunches.map(launch => (
      <Card data={launch} key={launch.id} />
    ));

    return <div className="launch-contain">{cardList}</div>;
  }
  return <div>Loading ...</div>;
};

CardList.propTypes = {
  launches: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.string.isRequired,
};

export default CardList;
