import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actionCreators from '../actions/index';

class Home extends Component {
  componentDidMount() {
    const { loadRockets } = this.props;
    loadRockets();
  }

  render() {
    const { rockets } = this.props;
    const images = rockets.map((rocket) => (
      <div className="img__wrap" key={rocket.id + rocket.name}>
        <img className="img__img" src={rocket.images[0]} alt={rocket.name} />
        <div className="img__description">
          <div className="img__text">{rocket.name}</div>
        </div>
      </div>
    ));

    return (
      <div className="card-panel grey lighten-2 jumbotron">
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

const mapStateToProps = (state) => ({
  rockets: state.rockets,
});

Home.propTypes = {
  loadRockets: PropTypes.func.isRequired,
  rockets: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, actionCreators)(Home);
