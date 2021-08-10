import { Container, Row, Col } from "react-bootstrap";
import MyNavbar from "components/my-navbar";
import Footer from 'components/footer'
import Header from 'components/header'
import Categories from "components/categories";
import { getAllCategories } from 'lib/api'
import { useTheme } from "../hooks/use-theme"
import { useCategories } from "hooks/use-categories";


export default ({ children, categories }) => {
  const { theme } = useTheme()
  const { data, isLoading, error } = useCategories(categories);
  return (
    <div className={theme.type}>
      <Container fluid>
        <Row>
          <MyNavbar />
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