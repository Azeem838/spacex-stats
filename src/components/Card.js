import React from 'react';
import { Button, Card } from 'react-bootstrap';

const CardComponent = ({ data }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img
        variant="top"
        src={
          data.links.flickr.small[0]
            ? data.links.flickr.small[0]
            : data.links.patch.small
        }
      />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>{data.details.substr(0, 150)}...</Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
