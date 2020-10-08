import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
import * as actionCreators from '../actions/index';

class Home extends Component {
  componentDidMount() {
    const { loadRockets } = this.props;
    loadRockets();
  }

  handleFilter = e => {
    const { changeFilter } = this.props;
    changeFilter(e.target.getAttribute('data-key'));
  };

  render() {
    const { rockets } = this.props;
    const images = rockets.map(rocket => (
      <NavLink
        to={`/launches/${rocket.name}`}
        onClick={this.handleFilter}
        key={rocket.id + rocket.name}
        data-key={rocket.id}
      >
        <div className="img__wrap" data-key={rocket.id}>
          <img
            data-key={rocket.id}
            className="img__img"
            src={rocket.images[0]}
            alt={rocket.name}
          />
          <div className="img__description" data-key={rocket.id}>
            <div className="img__text" data-key={rocket.id}>
              {rocket.name}
            </div>
          </div>
        </div>
      </NavLink>
    ));

    return (
      <div className="jumbotron">
        <div className="container">
          <h1 data-testid="home-title">SpaceX Stats</h1>
          <p style={{ fontSize: '1.5rem' }} data-testid="home-details">
            View your favourite SpaceX launches, filter by your favourite rocket
            and relive History!
          </p>
          <div data-testid="home-images" className="home-images">
            {images}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  rockets: state.rockets,
});

Home.propTypes = {
  rockets: PropTypes.arrayOf(PropTypes.object).isRequired,
  changeFilter: PropTypes.func.isRequired,
  loadRockets: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, actionCreators)(withRouter(Home));
