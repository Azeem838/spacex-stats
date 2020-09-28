import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/index';
import Card from '../components/Card';

class CardList extends Component {
  componentDidMount() {
    this.props.loadLaunches();
  }

  render() {
    console.log(this.props.data);
    if (Object.getOwnPropertyNames(this.props.data).length !== 0) {
      return <Card data={this.props.data} />;
    }
    return <div>Loading ...</div>;
  }
}

const mapStateToPropes = (state) => ({
  data: state.data,
});

export default connect(mapStateToPropes, actionCreators)(CardList);
