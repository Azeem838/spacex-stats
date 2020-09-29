import React from 'react';
import { Link } from 'react-router-dom';

const CardComponent = ({ data }) => {
  return (
    <div className="col s12 m7">
      <div className="card horizontal">
        <div className="card-image">
          <img
            alt="Launch"
            src={
              data.links.flickr.small[0]
                ? data.links.flickr.small[0]
                : data.links.patch.small
            }
          />
        </div>
        <div className="card-stacked">
          <div className="card-content">
            <span className="card-title">{data.name}</span>
            <p>{data.details.substr(0, 150)}...</p>
          </div>
          <div className="card-action">
            <Link to={'/' + data.id}>Read More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
