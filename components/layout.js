import { useRef } from "react"
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "hooks/use-dimensions";
import { MenuToggle } from "components/nav/MenuToggle";
import { Navigation } from "components/nav/Navigation"

import { Container, Row, Col } from "react-bootstrap";
import MyNavbar from "components/my-navbar";
import Footer from 'components/footer'
import Header from 'components/header'
import Categories from "components/categories";
import { getAllCategories } from 'lib/api'
import { useTheme } from "../hooks/use-theme"
import { useCategories } from "hooks/use-categories";


const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};


export default ({ children, categories }) => {
  const { theme } = useTheme()
  const { data, isLoading, error } = useCategories();

  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);


  return (
    <div className={theme.type}>
      <Container fluid>
        <Row>
          <MyNavbar />
          <div className="motionMenu d-md-none">
            <motion.nav
              initial={false}
              animate={isOpen ? "open" : "closed"}
              custom={height}
              ref={containerRef}
            >
              <motion.div className="background" variants={sidebar} />
              <Navigation />
              <MenuToggle toggle={() => toggleOpen()} />
            </motion.nav>
          </div>
        </Row>
        <Row>
          <Header />
        </Row>
      </Container>
      <Container>
        <Row>
          <Col md={8}>
            {children}
          </Col>
          <Col md={4}>
            <Categories categories={data} />
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Footer />
      </Container>
      <style jsx global>
        {
          // global style бичиж бна
          `html,
           body{
             background: ${theme.background};
             color:${theme.fontColor};
             transition: color 0.2s ease-out 0s, background 0.2s ease-out 0s;
           } 
          `
        }
      </style>
    </div>
  );
};


export const getStaticProps = async () => {
  // sanity preview горимын мэдээллийг browser - ийн cookie -д хадгалж бга
  const categories = await getAllCategories();

  console.log(`index.html хуудас дахин build хийгдлээ`)
  return {
    props: {
      categories,
    },
    revalidate: 10 // тухайн хугацааны дараа энэ хуудсыг дахин build хийнэ
  };
};