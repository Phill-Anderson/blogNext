import { Row, Col } from "react-bootstrap";
import GridItem from "components/grid-item";
import { getAllPosts } from "lib/api";
import Layout from "components/layout";
import Intro from "components/intro";
import { usePosts } from "hooks/usePosts";

export default function Home({ posts }) {
  const { data, isLoading, error } = usePosts(posts);
  if (error)
    return (
      <div>
        Алдаа гарлаа: <pre>{JSON.stringify(error, null, 2)}</pre>
      </div>
    );
  if (isLoading) return <div>Ачаалж байна...</div>;

  return (
    <Layout>
      <Row>
        <Col md="12">
          <Intro />
        </Col>
      </Row>

      <hr />
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <Row className="mb-5">
        {data.map((post) => (
          <Col md="4" key={Math.random()}>
            <GridItem post={post} />
          </Col>
        ))}
      </Row>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const posts = await getAllPosts();

  return {
    props: {
      posts,
    },
  };
};
