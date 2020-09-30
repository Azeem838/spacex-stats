import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/index';
import Card from '../components/Card';

class CardList extends Component {
  componentDidMount() {
    this.props.loadLaunches();
    this.props.loadRockets();
  }

  render() {
    if (this.props.rockets.length !== 0) {
      // console.log(this.props.rockets);
    }

    if (Object.getOwnPropertyNames(this.props.launches).length !== 0) {
      const prevLaunches = this.props.launches
        .filter((launch) => {
          return launch.upcoming === false;
        })
        .slice(1)
        .slice(-10);
      const upcomingLaunches = this.props.launches.filter((launch) => {
        return launch.upcoming === true;
      });
      const cardList = prevLaunches.map((launch) => (
        <Card data={launch} key={launch.id} />
      ));
      return <div className="container launch-contain d-flex">{cardList}</div>;
    }
    return <div>Loading ...</div>;
  }
}

const mapStateToPropes = (state) => ({
  launches: state.launches,
  rockets: state.rockets,
});

export default connect(mapStateToPropes, actionCreators)(CardList);
