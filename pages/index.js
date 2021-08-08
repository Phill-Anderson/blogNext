import { Row, Col } from "react-bootstrap";
import GridItem from "components/grid-item";
import { getAllPosts, getPaginatePosts } from "lib/api";
import Layout from "components/layout";
import Intro from "components/intro";
import { usePosts } from "hooks/usePosts";
import { useSWRInfinite } from "swr";
import PreviewAlert from "components/preview-alert";
const PAGE_LIMIT = 2

export default function Home({ posts, preview }) {
  // const { data, isLoading, error } = usePosts(posts);

  // app.js дээр глобал байдлаар useSWR - ийн fetcher функцийг тохируулж өгсөн учраас энэ тохиолдолд fetcher - ийг бичих шаардлагагүй
  const { data, size, setSize } = useSWRInfinite((index) => `/api/posts?page=${index}&limit=${PAGE_LIMIT}`);



  /* if (error)
     return (
       <div>
         Алдаа гарлаа: <pre>{JSON.stringify(error, null, 2)}</pre>
       </div>
     );
   if (isLoading) return <div>Ачаалж байна...</div>;
 */
  return (
    <Layout>
      <Row>
        {preview && <PreviewAlert />}
        <Col md="12">
          <Intro />
        </Col>
      </Row>

      <hr />
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <Row className="mb-5">
        {
          data && data.map(page => (
            page.map(post => (
              <Col md={12 / PAGE_LIMIT} key={Math.random()}>
                <GridItem post={post} />
              </Col>
            ))
          ))
        }
      </Row>

      <div style={{ textAlign: 'center' }}>
        {
          data && data[data.length - 1].length !== 0 && <button onClick={() => setSize(size + 1)}>Цааш нь ...</button>
        }
      </div>

    </Layout>
  );
}

export const getStaticProps = async ({ preview = false }) => {
  // sanity preview горимын мэдээллийг browser - ийн cookie -д хадгалж бга
  const posts = await getPaginatePosts(1, PAGE_LIMIT);
  return {
    props: {
      posts,
      preview
    },
  };
};
