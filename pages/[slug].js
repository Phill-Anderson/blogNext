import { Row, Col } from "react-bootstrap";
import Layout from "components/layout";
import { getPostBySlug, getAllPosts, getPaginatePosts } from "lib/api";
import BlockContent from "@sanity/block-content-to-react";
import HiglightCode from "components/higlight-code";
import { urlFor } from "lib/api";
import PostHeader from "components/post-header";
import { useRouter } from "next/router"

export default ({ post }) => {
  const router = useRouter()

  // getStaticPaths - ийн fallback - ийг true болгосноор getStaticPaths - аар орж ирсэн paths -уудаас ялгаатай path бүхий хуудсыг client талаас дуудвал түүнийг ssr хийж харуулна
  // өөрөөр хэлбэл энэхүү хуудсанд SG болон SSR - ийг хослуулан хэрэглэсэн хуудас юм.
  if (router.isFallback) return (
    <Layout>
      <div>түр хүлээнэ үү</div>
    </Layout>
  )

  return (
    <Layout>
      <Row>
        <Col md="12">
          <pre>{/*JSON.stringify(post, null, 2)*/}</pre>
          <PostHeader post={post} />
          <br />
          <BlockContent
            blocks={post.content}
            serializers={serializers}
            imageOptions={{ w: 320, h: 240, fit: "max" }}
          />
        </Col>
      </Row>
    </Layout>
  );
};

const serializers = {
  types: {
    code: (props) => (
      <HiglightCode language={props.node.language}>
        {props.node.code}
        <div className="code-filename">{props.node.filename}</div>
      </HiglightCode>
    ),
    image: (props) => (
      <div className={`blog-image blog-image-${props.node.position}`}>
        <img src={urlFor(props.node).height(400).url()} />
        <div className="code-filename" style={{ textAlign: "center" }}>
          {props.node.alt}
        </div>
      </div>
    ),
  },
};

export const getStaticProps = async ({ params }) => {
  const post = await getPostBySlug(params.slug);
  return {
    props: {
      post: post[0],
    },
  };
};

export const getStaticPaths = async () => {
  const posts = await getPaginatePosts(0, 4);
  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: true, // тухайн paths - аас ондоо paths орж ирвэл ssr хийж харуулна SG, SSR - ИЙГ хослуулан хэрэглэсэн хуудас
  };
};
