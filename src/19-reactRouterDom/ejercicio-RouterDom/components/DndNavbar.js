import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom';


export const DndNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src="/images/Dnd/icon.png" alt="" />
            Dnd 5e
            </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About Dnd</Nav.Link>
            <Nav.Link as={Link} to="/clases">Classes</Nav.Link>
            <Nav.Link as={Link} to="/equipment-categories">Equipment</Nav.Link>
            <Nav.Link as={Link} to="/skills">Skills</Nav.Link>
            <Nav.Link as={Link} to="/ability_scores">Ability</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}
