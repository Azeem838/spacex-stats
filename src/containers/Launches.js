import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actionCreators from '../actions/index';
import CardList from './CardList';

class Launches extends Component {
  componentDidMount() {
    const { loadLaunches, loadRockets } = this.props;
    loadLaunches();
    loadRockets();
  }

  render() {
    const { rockets, launches, filter } = this.props;
    if (rockets.length > 1) {
      return (
        <div
          data-testid="launches-container"
          className="main-launches-container"
        >
          <CardList filter={filter} launches={launches} />
        </div>
      );
    }
    return null;
  }
}

const mapStateToProps = state => ({
  launches: state.launches,
  rockets: state.rockets,
  filter: state.filter,
});

Launches.propTypes = {
  loadLaunches: PropTypes.func.isRequired,
  loadRockets: PropTypes.func.isRequired,
  rockets: PropTypes.arrayOf(PropTypes.object).isRequired,
  launches: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, actionCreators)(Launches);
