import React from 'react';
import { Navbar, Form, FormControl, Button, Nav } from 'react-bootstrap';

const NavComponent = () => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">SpaceX Stats</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Launches</Nav.Link>
      <Nav.Link href="#dragons">Dragons</Nav.Link>
      <Nav.Link href="#rockets">Rockets</Nav.Link>
      <Nav.Link href="#ships">Ships</Nav.Link>
      <Nav.Link href="#landpads">Landpads</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>
  </Navbar>
);

export default NavComponent;
