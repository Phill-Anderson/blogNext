import { Navbar, Nav, Container } from "react-bootstrap";
import { useTheme } from "../hooks/use-theme"
import Toggle from 'react-toggle'
import MenuGeneralItem from "./nav/MenuGeneralItem"
import { UseNavIcons } from "hooks/use-nav-icons"

const MyNavbar = () => {
  const { theme, toggleTheme } = useTheme()

  const { sun, moon, home, profile, blog, projects, contact, challenges } = UseNavIcons(theme)
  return (
    <Container>
      <Navbar variant={theme.type} className="fj-navbar fj-nav-base" bg="transparent" expand="lg">
        <Navbar.Brand className="fj-navbar-brand  d-none d-md-block">
          <MenuGeneralItem theme icon={home} tooltipText="Нүүр хуудас" href="/" />
          <MenuGeneralItem theme icon={profile} tooltipText="Портфолио" href="/profile" />
          <MenuGeneralItem theme icon={blog} tooltipText="Блог" href="/blog" />
          <MenuGeneralItem theme icon={projects} tooltipText="Төслүүд" href="/projects" />
          <MenuGeneralItem theme icon={challenges} tooltipText="Чейлэнжүүд" href="/challenges" />
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
export default MyNavbar;