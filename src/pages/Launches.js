import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    this.props.loadLaunches();
    this.props.loadRockets();
  }
  handleFilter = (e) => {
    const filter = e.target.getAttribute('data-key');
    this.setState({
      filter,
    });
  };

  render() {
    if (this.props.rockets.length > 1) {
      return (
        <div className="container">
          <Tabs handleFilter={this.handleFilter} rockets={this.props.rockets} />
          <CardList filter={this.state.filter} launches={this.props.launches} />
        </div>
      );
    }
    return <div>Loading...</div>;
  }
}

const mapStateToProps = (state) => ({
  launches: state.launches,
  rockets: state.rockets,
});

export default connect(mapStateToProps, actionCreators)(Launches);
