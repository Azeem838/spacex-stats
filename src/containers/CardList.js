import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/index';
import Card from '../components/Card';

class CardList extends Component {
  componentDidMount() {
    this.props.loadLaunches();
  }

  render() {
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
      return <div className="container d-flex">{cardList}</div>;
    }
    return <div>Loading ...</div>;
  }
}

const mapStateToPropes = (state) => ({
  launches: state.launches,
});

export default connect(mapStateToPropes, actionCreators)(CardList);
