import React from 'react';
import { Link } from 'react-router-dom';

const CardComponent = ({ data }) => {
  return (
    <div className="col s12 m6">
      <Link to={'/' + data.id}>
        <div className="card horizontal hoverable">
          <div className="card-image">
            <img
              alt="Launch"
              src={
                data.links.flickr.original[0]
                  ? data.links.flickr.original[0]
                  : data.links.patch.small
              }
            />
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <span className="card-title">{data.name}</span>
              <p className="black-text">{data.details.substr(0, 50)}...</p>
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

export default CardComponent;
