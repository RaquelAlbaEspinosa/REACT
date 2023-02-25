import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const NavbarApp = () => {
  return (
    <div>
        {/* Navegación mediante linkeo */}
        <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/user">User</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}
