import React, { useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";
import ThemeContext from '../context/theme-context'
export default () => {
  const context = useContext(ThemeContext)
  return (
    <Navbar className="fj-navbar fj-nav-base" bg="transparent" expand="lg">
      <Navbar.Brand className="fj-navbar-brand">
        <a href="#" onClick={context.toggleTheme} style={{ color: context.theme.fontColor }}>1234 БЛОГ</a>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link className="fj-navbar-item fj-navbar-link" href="/">
            {context.theme.fontColor}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
