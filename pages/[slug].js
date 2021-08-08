import { useState, useEffect } from 'react'
import { Row, Col } from "react-bootstrap";
import BlockContent from "@sanity/block-content-to-react";
import { useRouter } from "next/router"

import { urlFor } from "lib/api";
import HiglightCode from "components/higlight-code";
import PostHeader from "components/post-header";
import Layout from "components/layout";
import { getPostBySlug, getAllPosts, getPaginatePosts, listenPostUpdate } from "lib/api";
import PreviewAlert from '../components/preview-alert'
export default ({ post: initialPost, preview }) => {
  const [post, setPost] = useState(initialPost)
  const router = useRouter()

  useEffect(() => {
    const sub = listenPostUpdate(post.slug, (update) => {
      // debugger; // програмыг энд ирээд зогсооно -- browser дээрээсээ developer tool рүү орж source - ийг сонгож энэ зогссон мөрийг ажиглах боломжтой болно.
      console.log(update)
      setPost(update.result)
    })

    return sub && sub.subscribe?.(); // тухайн comp-оос subscribe функцийг гарах үед цэвэрлэж бна
  }, [])

  // getStaticPaths - ийн fallback - ийг true болгосноор getStaticPaths - аар орж ирсэн paths -уудаас ялгаатай path бүхий хуудсыг client талаас дуудвал түүнийг ssr хийж харуулна
  // өөрөөр хэлбэл энэхүү хуудсанд SG болон SSR - ийг хослуулан хэрэглэсэн хуудас юм.
  //fallBack горим нь сервэрээс өгөгдөл татах үеийн горим юм
  if (router.isFallback) return (
    <Layout>
      <div>түр хүлээнэ үү</div>
    </Layout>
  )

  // өгөгдөл татаж дууссан үед
  if (!router.isFallback && !post?.slug)
    return (
      <Layout>
        <div>Уучлаарай ийм өгөгдөл байхгүй!</div>
      </Layout>
    )

  return (
    <Layout>
      <Row>
        <Col md="12">
          {preview && <PreviewAlert />}
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

export const getStaticProps = async ({ params, preview = false, previewData }) => {
  // sanity preview горимын мэдээллийг browser - ийн cookie -д хадгалж бга
  const post = await getPostBySlug(params.slug, preview);

  // post[0] - sanity-гаас published горимд байгаа post 
  // post[1] - sanity-гаас preview горимд байгаа post
  // post.length > 1 preview горим дээр post - д өөрчлөлт орсон эсхийг шалгаж байна
  return {
    props: {
      post: post.length > 1 ? post[1] : (post.length > 0 ? post[0] : {}),
      preview,
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
