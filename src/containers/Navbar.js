import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import M from 'materialize-css';
import { changeFilter } from '../actions/index';

class NavBar extends React.Component {
  componentDidMount() {
    const elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems, {});
  }

  handleFilter = (e) => {
    const { changeFilter } = this.props;
    changeFilter(e.target.getAttribute('data-key'));
  };

  render() {
    const { rockets } = this.props;
    const rocketNames = rockets.map((rocket) => (
      <li key={rocket.id}>
        <NavLink
          data-testid={`${rocket.name}-tab`}
          className={
            rocket.name === 'Starship' ? 'nav-link disabled' : 'nav-link'
          }
          to={`/launches/${rocket.name}`}
          onClick={this.handleFilter}
          data-key={rocket.id}
        >
          {rocket.name}
        </NavLink>
      </li>
    ));
    return (
      <div>
        <nav className="deep-orange accent-1">
          <div className="nav-wrapper nav-contain">
            <NavLink data-testid="logo-link" className="brand-logo" to="/">
              SpaceX Stats
            </NavLink>
            <a
              href="#menu"
              data-target="mobile-demo"
              className="sidenav-trigger"
            >
              <i className="material-icons">menu</i>
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <NavLink
                  data-testid="all-tab"
                  className="nav-link"
                  to="/launches/all"
                  onClick={this.handleFilter}
                  data-key="all"
                  href="#all"
                >
                  All
                </NavLink>
              </li>
              {rocketNames}
              <li>
                <NavLink
                  data-testid="upcoming-tab"
                  className="nav-link"
                  to="/launches/upcoming"
                  onClick={this.handleFilter}
                  data-key="upcoming"
                  href="#upcoming"
                >
                  Upcoming
                </NavLink>
              </li>
              <li>
                <NavLink
                  data-testid="previous-tab"
                  className="nav-link"
                  to="/launches/previous"
                  onClick={this.handleFilter}
                  data-key="previous"
                  href="#previous"
                >
                  Previous
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          <li>
            <NavLink
              data-testid="all-tab"
              className="nav-link"
              to="/launches/all"
              onClick={this.handleFilter}
              data-key="all"
              href="#all"
            >
              All
            </NavLink>
          </li>
          {rocketNames}
          <li>
            <NavLink
              data-testid="upcoming-tab"
              className="nav-link"
              to="/launches/upcoming"
              onClick={this.handleFilter}
              data-key="upcoming"
              href="#upcoming"
            >
              Upcoming
            </NavLink>
          </li>
          <li>
            <NavLink
              data-testid="previous-tab"
              className="nav-link"
              to="/launches/previous"
              onClick={this.handleFilter}
              data-key="previous"
              href="#previous"
            >
              Previous
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  rockets: state.rockets,
});

const mapDispatchToProps = (dispatch) => ({
  changeFilter: (filter) => {
    dispatch(changeFilter(filter));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavBar));
