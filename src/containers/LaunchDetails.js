import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Moment from 'moment';
import M from 'materialize-css';

class Launch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const id = params.launch_id;
    this.setState({
      id,
    });
  }

  componentDidUpdate() {
    try {
      const elems = document.querySelectorAll('.carousel');
      M.Carousel.init(elems, {
        fullWidth: true,
      });
    } catch (error) {
      return null;
    }
    return null;
  }

  render() {
    const { launches } = this.props;
    const { id } = this.state;
    const launch = launches.find(launch => launch.id === id);

    let imageList;

    if (launch) {
      if (launch.links.flickr.original) {
        imageList = launch.links.flickr.original.map((link, i) => (
          <a
            className="carousel-item"
            href={`#${i}`}
            key={launch.id + Math.random()}
            style={{ pointerEvents: 'none' }}
          >
            <img src={link} alt="spacex-img" />
          </a>
        ));
      }
    }

    return launch ? (
      <div className="launch-details-container">
        <h3 data-testid="launch-details-name" className="center">
          {launch.name}
        </h3>
        <h5 className="center">
          Flight Number:
          {launch.flight_number}
        </h5>
        <h5 className="center">
          Date:
          {' '}
          {Moment(launch.date_utc).format('MMMM Do YYYY, h:mm:ss a')}
        </h5>
        <div className="video-container">
          <iframe
            src={`//www.youtube.com/embed/${launch.links.youtube_id}?rel=0`}
            allowFullScreen
            title="launch-video"
          />
        </div>
        <div className="container launch-details">
          <h4>Details:</h4>
          <br />
          <p>{launch.details}</p>
          <div className="collection">
            <h4 className="collection-header">Links:</h4>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={launch.links.wikipedia}
              className="collection-item"
            >
              <i className="material-icons">link</i>
              Wikipedia
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={launch.links.article}
              className="collection-item"
            >
              <i className="material-icons">link</i>
              Read More
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={launch.links.reddit.media}
              className="collection-item"
            >
              <i className="material-icons">link</i>
              Media
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={launch.links.reddit.launch}
              className="collection-item"
            >
              <i className="material-icons">link</i>
              Launch Discussion
            </a>
          </div>
          <h4>Gallery:</h4>
          <div className="carousel carousel-slider">
            {imageList.length ? imageList : 'No Images Yet'}
          </div>
        </div>
      </div>
    ) : null;
  }
}

const mapStateToProps = state => ({
  launches: state.launches,
});

Launch.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      launch_id: PropTypes.string,
    }),
  }).isRequired,
  launches: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Launch);
