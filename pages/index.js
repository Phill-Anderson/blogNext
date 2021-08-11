import { Row, Col, Container } from "react-bootstrap";
import GridItem from "components/grid-item";
import { getAllPosts, getPaginatePosts } from "lib/api";
import Layout from "components/layout";
import { usePosts } from "hooks/usePosts";
import { useSWRInfinite } from "swr";
import PreviewAlert from "components/preview-alert";

const PAGE_LIMIT = 2

export default function Home({ posts, preview }) {
  // const { data, isLoading, error } = usePosts(posts);

  // app.js дээр глобал байдлаар useSWR - ийн fetcher функцийг тохируулж өгсөн учраас энэ тохиолдолд fetcher - ийг дамжуулах шаардлагагүй
  const { data, size, setSize, isValidating } = useSWRInfinite((index) => `/api/posts?page=${index}&limit=${PAGE_LIMIT}`,
    { initialData: [posts] }
  );

  return (
    <Layout classes="index">
      <Row>
        {preview && <PreviewAlert />}
      </Row>
      {/*  <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <Row className="mb-5 mt-5">
        {
          data && data.map(page => (
            page.map(post => (
              <Col lg={12} key={Math.random()}>
                <GridItem post={post} />
              </Col>
            ))
          ))
        }
      </Row>

      <div style={{ textAlign: 'center' }}>
        {
          data && data[data.length - 1].length !== 0 &&

          (isValidating ? <div>Түр хүлээнэ үү ...</div> :
            <button className="moreBtn" onClick={() => setSize(size + 1)}>Цааш нь ...</button>
          )
        }
      </div>
    </Layout>
  );
}



export const getStaticProps = async ({ preview = false }) => {
  // sanity preview горимын мэдээллийг browser - ийн cookie -д хадгалж бга
  const posts = await getPaginatePosts(0, PAGE_LIMIT);

  console.log(`index.html хуудас дахин build хийгдлээ`)
  return {
    props: {
      posts,
      preview
    },
    revalidate: 10000 // тухайн хугацааны дараа энэ хуудсыг дахин build хийнэ
  };
};
