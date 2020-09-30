import React from 'react';

const Tabs = ({ rockets, handleFilter }) => {
  const rocketNames = rockets.map((rocket, i) => (
    <li
      className={rocket.name === 'Starship' ? 'tab disabled' : 'tab'}
      key={rocket.id}
    >
      <a onClick={handleFilter} data-key={rocket.id} href={`#${i}`}>
        {rocket.name}
      </a>
    </li>
  ));
  return (
    <ul className="tabs tabs-fixed-width z-depth-1">
      <li className="tab" key="all">
        <a onClick={handleFilter} data-key="all" href="#all">
          All
        </a>
      </li>
      {rocketNames}
      <li className="tab" key="upcoming">
        <a onClick={handleFilter} data-key="upcoming" href="#upcoming">
          Upcoming
        </a>
      </li>
      <li className="tab" key="previous">
        <a onClick={handleFilter} data-key="previous" href="#previous">
          Previous
        </a>
      </li>
    </ul>
  );
};

export default Tabs;
