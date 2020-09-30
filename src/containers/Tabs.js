import React from 'react';
import PropTypes from 'prop-types';

const Tabs = ({ rockets, handleFilter }) => {
  const rocketNames = rockets.map((rocket, i) => (
    <li
      className={rocket.name === 'Starship' ? 'tab disabled' : 'tab'}
      key={rocket.id}
      data-testid={`${rocket.name}-tab`}
    >
      <a onClick={handleFilter} data-key={rocket.id} href={`#${i}`}>
        {rocket.name}
      </a>
    </li>
  ));
  return (
    <ul className="tabs tabs-fixed-width z-depth-1">
      <li className="tab" key="all" data-testid="all-tab">
        <a onClick={handleFilter} data-key="all" href="#all">
          All
        </a>
      </li>
      {rocketNames}
      <li className="tab" key="upcoming" data-testid="upcoming-tab">
        <a onClick={handleFilter} data-key="upcoming" href="#upcoming">
          Upcoming
        </a>
      </li>
      <li className="tab" key="previous" data-testid="previous-tab">
        <a onClick={handleFilter} data-key="previous" href="#previous">
          Previous
        </a>
      </li>
    </ul>
  );
};

Tabs.propTypes = {
  rockets: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleFilter: PropTypes.func.isRequired,
};

export default Tabs;