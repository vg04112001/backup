import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Product } from "../components/product";

type SingleCardProps = {
  singleProduct : Product
}

const SingleCard = ({singleProduct}: SingleCardProps) => {
  // console.log(single)
  return (
    <Col lg={4} md={4} sm={6} className="mb-2">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={singleProduct.imgSrc} />
        <Card.Body>
          <Card.Title>{singleProduct.title}</Card.Title>
          <Card.Text>
            {singleProduct.text}
          </Card.Text>
          <Button variant="primary">{singleProduct.link}</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleCard;