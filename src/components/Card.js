import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../images/default-launch-image.jpg';

const CardComponent = ({ data }) => {
  const { id, links, name, details } = data;
  const imgCheck = links.flickr.original[0]
    ? links.flickr.original[0]
    : links.patch.small;
  return (
    <div>
      <Link data-testid="read-more" to={`/${id}`}>
        <div className="card small horizontal hoverable">
          <div className="card-image">
            <img alt="Launch" src={imgCheck !== null ? imgCheck : logo} />
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <span className="card-title">{name.substr(0, 15)}</span>
              <p className="black-text">
                {details ? details.substr(0, 60) : 'No details available'}
                ...
              </p>
            </div>
            <div className="card-action red-text">
              <div>Read More</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

CardComponent.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    links: PropTypes.shape({
      flickr: PropTypes.shape({
        original: PropTypes.arrayOf(PropTypes.string),
      }),
      patch: PropTypes.objectOf(PropTypes.string),
    }),
    name: PropTypes.string,
    details: PropTypes.string,
  }).isRequired,
};

export default CardComponent;
