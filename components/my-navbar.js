import { Navbar, Nav, Container, OverlayTrigger, Tooltip, Button } from "react-bootstrap";
import { useTheme } from "../hooks/use-theme"
import Link from 'next/link'
import Toggle from 'react-toggle'
import MenuGeneralItem from "./nav/MenuGeneralItem"

import { IconContext } from "react-icons";
import { FaSun, FaMoon, FaHome, FaBlog, FaPhoneAlt } from 'react-icons/fa';
import { ImProfile } from "react-icons/im"
import { GoProject } from "react-icons/go"
import { MdContactPhone } from "react-icons/md"
export default () => {
  const { theme, toggleTheme } = useTheme()

  const sun = <IconContext.Provider value={{ color: "white" }}> <FaSun /></IconContext.Provider>;
  const moon = <IconContext.Provider value={{ color: "white" }}> <FaMoon /> </IconContext.Provider>;
  const home = <IconContext.Provider value={{ size: "30px", color: theme.type === "dark" ? "white" : "#63696e" }}> <FaHome /></IconContext.Provider>;
  const profile = <IconContext.Provider value={{ size: "30px", color: theme.type === "dark" ? "white" : "#63696e" }}> <ImProfile /></IconContext.Provider>;
  const blog = <IconContext.Provider value={{ size: "30px", color: theme.type === "dark" ? "white" : "#63696e" }}> <FaBlog /></IconContext.Provider>;
  const projects = <IconContext.Provider value={{ size: "30px", color: theme.type === "dark" ? "white" : "#63696e" }}> <GoProject /></IconContext.Provider>;
  const contact = <IconContext.Provider value={{ size: "30px", color: theme.type === "dark" ? "white" : "#63696e" }}> <FaPhoneAlt /></IconContext.Provider>;

  return (
    <Container>
      <Navbar variant={theme.type} className="fj-navbar fj-nav-base" bg="transparent" expand="lg">
        <Navbar.Brand className="fj-navbar-brand  d-none d-md-block">
          <MenuGeneralItem theme icon={home} tooltipText="Нүүр хуудас" href="/" />
          <MenuGeneralItem theme icon={profile} tooltipText="Портфолио" href="/profile" />
          <MenuGeneralItem theme icon={blog} tooltipText="Блог" href="/blog" />
          <MenuGeneralItem theme icon={projects} tooltipText="Төслүүд" href="/projects" />
          <MenuGeneralItem theme icon={contact} tooltipText="Холбоо барих" href="/contact" />
        </Navbar.Brand>
        <Nav className="ml-auto">
          <label style={{ paddingTop: 7 }}>
            <Toggle className="day-night-toggle"
              icons={{
                checked: theme.type === "dark" ? moon : sun,
                unchecked: theme.type === "light" ? sun : moon,
              }}
              onChange={toggleTheme} />
          </label>
        </Nav>
      </Navbar>
    </Container>
  );
};
