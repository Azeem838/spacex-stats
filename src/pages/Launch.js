import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'moment';
import M from 'materialize-css';

class Launch extends Component {
  state = {
    id: null,
  };

  componentDidMount() {
    const id = this.props.match.params.launch_id;
    this.setState({
      id,
    });
  }

  componentDidUpdate() {
    try {
      const elems = document.querySelectorAll('.carousel');
      const instance = M.Carousel.init(elems, {
        fullWidth: true,
      });
    } catch (error) {
      return null;
    }
    return null;
  }

  render() {
    const launch = this.props.launches.find(
      (launch) => launch.id === this.state.id,
    );

    let imageList;

    if (launch) {
      if (launch.links.flickr.original) {
        imageList = launch.links.flickr.original.map((link, i) => {
          return (
            <a
              className="carousel-item"
              href={'#' + i}
              key={launch.id + Math.random()}
              style={{ pointerEvents: 'none' }}
            >
              <img src={link} alt="spacex-img" />
            </a>
          );
        });
      }
    }

    return launch ? (
      <div>
        <h3 className="center">{launch.name}</h3>
        <h5 className="center">Flight Number: {launch.flight_number}</h5>
        <h5 className="center">
          Date: {Moment(launch.date_utc).format('MMMM Do YYYY, h:mm:ss a')}
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
              <i className="material-icons">link</i>Read More
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={launch.links.reddit.media}
              className="collection-item"
            >
              <i className="material-icons">link</i>Media
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={launch.links.reddit.launch}
              className="collection-item"
            >
              <i className="material-icons">link</i>Launch Discussion
            </a>
          </div>
          <div className="carousel carousel-slider">
            {imageList.length ? imageList : 'No Images Yet'}
          </div>
        </div>
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
