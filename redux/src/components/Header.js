import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import useTitle from '../customHooks/useTitle'

function Header() {
  const count = useSelector((state) => state.cartDataReducer);
  // console.log(count);
  const [visitorCount, setVisitorCount] = useState(0);
  
  useTitle(visitorCount)
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Button variant="primary" onClick={()=> setVisitorCount(visitorCount+1)}>Visitor Count</Button>
          </Nav>
        </Navbar.Collapse>
        <Button variant="primary">Cart: {count.length}</Button>{' '}
      </Container>
    </Navbar>
  );
}

export default Header;