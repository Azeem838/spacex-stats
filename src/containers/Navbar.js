import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const NavComponent = () => (
  <nav>
    <div className="nav-wrapper container">
      <NavLink data-testid="logo-link" className="brand-logo" to="/">
        SpaceX Stats
      </NavLink>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
          <NavLink
            data-testid="launches-link"
            className="nav-link"
            to="/launches"
          >
            Launches
          </NavLink>
        </li>
        <li>
          <NavLink
            data-testid="dragons-link"
            className="nav-link"
            to="/dragons"
          >
            Dragons
          </NavLink>
        </li>
        <li>
          <NavLink
            data-testid="rockets-link"
            className="nav-link"
            to="/rockets"
          >
            Rockets
          </NavLink>
        </li>
        <li>
          <NavLink data-testid="ships-link" className="nav-link" to="/ships">
            Ships
          </NavLink>
        </li>
        <li>
          <NavLink
            data-testid="landpads-link"
            className="nav-link"
            to="/landpads"
          >
            Landpads
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default withRouter(NavComponent);
