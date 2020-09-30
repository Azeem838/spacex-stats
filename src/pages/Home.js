import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/index';

class Home extends Component {
  componentDidMount() {
    this.props.loadRockets();
  }

  render() {
    const images = this.props.rockets.map((rocket) => {
      return (
        <div className="img__wrap">
          <img
            className="img__img"
            src={rocket.images[0]}
            alt={rocket.name}
            key={rocket.id + rocket.name}
          />
          <p className="img__description">
            <div className="img__text">{rocket.name}</div>
          </p>
        </div>
      );
    });

    return (
      <div className="card-panel grey lighten-2 jumbotron">
        <div className="container">
          <h1>SpaceX Stats</h1>
          <p>
            View your favourite SpaceX launches, filter by your favourite rocket
            and relive History!
          </p>
          <div className="home-images">{images}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  rockets: state.rockets,
});

export default connect(mapStateToProps, actionCreators)(Home);
