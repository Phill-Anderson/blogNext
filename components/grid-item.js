import { Card, Col, Row } from "react-bootstrap";
import Link from "next/link";
import BlockContent from "@sanity/block-content-to-react";
import moment from "moment";
import { urlFor } from "lib/api";
import HiglightCode from "components/higlight-code";
const griditem = ({ post }) => {
  moment.locale("mn");

  const txt = <BlockContent blocks={post.content} serializers={serializers} imageOptions={{ w: 320, h: 240, fit: "max" }} />;
  return (
    <div className="post">
      {/*  <pre>{JSON.stringify(post, null, 2)}</pre> */}
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <Row>
              <Link href={`/${post.slug}`}>
                <a>
                  <h3>{post.title}</h3>
                  <p className="subStrText">{txt}</p>
                </a>
              </Link>
            </Row>
            <Row>
              <div style={{ paddingLeft: '20px' }}>
                <img src={urlFor(post.publisher.picture).height(50).url()} className="rounded-circle mr-3" height={30} width={30} /> {post.publisher.title}, {post.category.title} - д нийтэлсэн.
              </div>
              <p> {moment(post.date).format("ll")}</p>
            </Row>
          </div>
          <div className="col-lg-4">
            <Link href={`/${post.slug}`}>
              <a>
                <div className='image'>
                  <img src={urlFor(post.image).height(300).url()} alt="post image" />
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default griditem

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