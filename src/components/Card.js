import React from 'react';
import { Button, Card } from 'react-bootstrap';

const CardComponent = () => (
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the cards content.
      </Card.Text>
      <Button variant="primary">More Information</Button>
    </Card.Body>
  </Card>
);

export default CardComponent;
