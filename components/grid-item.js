import { Card } from "react-bootstrap";
import Link from "next/link";
import moment from "moment";
import { urlFor } from "lib/api";

const griditem = ({ post }) => {
  moment.locale("mn");

  return (
    <Card className={`fj-card`}>
      {/*   <pre>{JSON.stringify(post.category, null, 2)}</pre> */}
      <div className="card-body-wrapper">
        <Card.Header className="d-flex flex-row">
          <img
            src={urlFor(post.publisher.picture).height(50).url()}
            className="rounded-circle mr-3"
            height={50}
            width={50}
          />
          <div>
            <Card.Title className="font-weight-bold mb-1">
              {post.publisher.title}
            </Card.Title>
            <Card.Text className="card-date">
              {moment(post.date).format("lll")}
            </Card.Text>
          </div>
        </Card.Header>

        <Link href={`/${post.slug}`}>
          <a>
            <div className="view overlay">
              <Card.Img
                src={urlFor(post.image).height(300).url()}
                alt="Card image cap"
              />
            </div>
            <Card.Body>
              <Card.Title className="card-main-title">{post.title}</Card.Title>
              <Card.Text>{post.category.title}</Card.Text>
            </Card.Body>
          </a>
        </Link>
      </div>
    </Card>
  );
};
export default griditem