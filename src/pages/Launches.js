import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actionCreators from '../actions/index';
import CardList from '../containers/CardList';
import Tabs from '../containers/Tabs';

class Launches extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
    };
  }

  componentDidMount() {
    const { loadLaunches, loadRockets } = this.props;
    loadLaunches();
    loadRockets();
  }

  handleFilter = e => {
    const filter = e.target.getAttribute('data-key');
    this.setState({
      filter,
    });
  };

  render() {
    const { rockets, launches } = this.props;
    const { filter } = this.state;
    if (rockets.length > 1) {
      return (
        <div
          data-testid="launches-container"
          className="container main-launches-container"
        >
          <Tabs handleFilter={this.handleFilter} rockets={rockets} />
          <CardList filter={filter} launches={launches} />
        </div>
      );
    }
    return <div data-testid="loading-launches">Loading...</div>;
  }
}

const mapStateToProps = state => ({
  launches: state.launches,
  rockets: state.rockets,
});

Launches.propTypes = {
  loadLaunches: PropTypes.func.isRequired,
  loadRockets: PropTypes.func.isRequired,
  rockets: PropTypes.arrayOf(PropTypes.object).isRequired,
  launches: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, actionCreators)(Launches);
