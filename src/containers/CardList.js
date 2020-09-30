import React from 'react';
import Card from '../components/Card';

const CardList = (props) => {
  console.log(props.filter);
  if (Object.getOwnPropertyNames(props.launches).length !== 0) {
    let filterLaunches;
    if (props.filter === '' || props.filter === 'all') {
      filterLaunches = props.launches.slice(1).slice(-10);
    } else if (props.filter === 'previous') {
      filterLaunches = props.launches
        .filter((launch) => {
          return launch.upcoming === false;
        })
        .slice(1)
        .slice(-10);
    } else if (props.filter === 'upcoming') {
      filterLaunches = props.launches.filter((launch) => {
        return launch.upcoming === true;
      });
    } else {
      filterLaunches = props.launches.filter((launch) => {
        return launch.rocket === props.filter;
      });
    }
    const cardList = filterLaunches.map((launch) => (
      <Card data={launch} key={launch.id} />
    ));

    return <div className="launch-contain">{cardList}</div>;
  }
  return <div>Loading ...</div>;
};

export default CardList;
