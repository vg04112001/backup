import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { useState } from "react";
import Form from 'react-bootstrap/Form';


const Header = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const toggleHandler = (): void => {
    setToggle((s)=> !s);
  }
  return (
    <Navbar expand="lg" className={toggle ? "bg-dark" : "bg-tertiary"}>
      <Container>
        <Navbar.Brand href="#" className={toggle ? "text-white" : "text-dark"}>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="text-decoration-none p-2">Home</Link>
            <Link to="/about" className="text-decoration-none p-2">About Us</Link>
            <Link to="/products" className="text-decoration-none p-2">All Products</Link>
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
          </Nav>
          <Form.Check // prettier-ignore
            type="switch"
            id="custom-switch"
            onClick={toggleHandler}
          />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;