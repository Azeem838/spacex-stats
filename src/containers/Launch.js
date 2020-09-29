import React, { Component } from 'react';
import { connect } from 'react-redux';

class Launch extends Component {
  state = {
    id: null,
  };

  componentDidMount() {
    let id = this.props.match.params.launch_id;
    this.setState({
      id,
    });
  }

  render() {
    const launch = this.props.launches.find(
      (launch) => launch.id === this.state.id,
    );

    return launch ? (
      <div>
        <h4>{launch.name}</h4>
      </div>
    ) : (
      <div>Loading ...</div>
    );
  }
}

const mapStateToPropes = (state) => ({
  launches: state.launches,
});

export default connect(mapStateToPropes)(Launch);
