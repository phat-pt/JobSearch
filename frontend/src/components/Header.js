import React from "react";
import { LinkContainer } from "react-router-bootstrap"
import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
  Row,
  Col,
} from "react-bootstrap"


function Header() {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand >Job Finder</Navbar.Brand>
          </LinkContainer>
           
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Nav className="mr-auto"></Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-3"
              />
              <FormControl
                type="text"
                placeholder="Location"
                className="mr-sm-3"
              />
              <LinkContainer to='/'>
                <Button variant="outline-success">Search</Button>
              </LinkContainer>
            </Form>
          </Container>
        </Navbar>
    </header>
  );
}

export default Header;
