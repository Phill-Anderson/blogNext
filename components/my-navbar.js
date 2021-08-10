import { Navbar, Nav, Container } from "react-bootstrap";
import { useTheme } from "../hooks/use-theme"
import Link from 'next/link'
import Toggle from 'react-toggle'

import { IconContext } from "react-icons";
import { FaSun, FaMoon, FaHome } from 'react-icons/fa';
import { ImProfile } from "react-icons/im"
export default () => {
  const { theme, toggleTheme } = useTheme()

  const sun = <IconContext.Provider value={{ color: "white" }}> <FaSun /></IconContext.Provider>;
  const moon = <IconContext.Provider value={{ color: "white" }}> <FaMoon /> </IconContext.Provider>;
  const home = <IconContext.Provider value={{ size: "30px" }}> <FaHome /></IconContext.Provider>;
  const profile = <IconContext.Provider value={{ size: "30px" }}> <ImProfile /></IconContext.Provider>;
  return (
    <Container>
      <Navbar variant={theme.type} className="fj-navbar fj-nav-base" bg="transparent" expand="lg">
        <Navbar.Brand className="fj-navbar-brand">
          <Link href="/">
            <a style={{ color: theme.fontColor }}>Phill Anderson</a>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <label style={{ paddingTop: 7 }}>
              <Toggle className="day-night-toggle"
                icons={{
                  checked: theme.type === "dark" ? moon : sun,
                  unchecked: theme.type === "light" ? sun : moon,
                }}
                onChange={toggleTheme} />
            </label>
            <Link href="/">
              <a className="fj-navbar-item fj-navbar-link" style={{ color: theme.fontColor, marginTop: 5 }}>{home}</a>
            </Link>
            <Link href="/profile">
              <a className="fj-navbar-item fj-navbar-link" style={{ color: theme.fontColor, marginTop: 5 }}>{profile}</a>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};
