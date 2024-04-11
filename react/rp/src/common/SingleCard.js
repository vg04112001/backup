import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const SingleCard = ({single}) => {
  // const counterVar = useContext(CounterContext);
  // console.log(counterVar);
  // console.log(single)
  // const [countValue, setCountValue] = useState(0);
  // const increment = () => setCountValue(countValue + 1);
  // const decrement = () => setCountValue(countValue - 1);
  return (
    <Col lg={4} md={4} sm={6} className="mb-2">
        <Link to={`/singleproduct/${single.id}`} className="text-decoration-none">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={single.imgSrc} />
          
          <Card.Body>
            <Card.Title>{single.title}</Card.Title>
            {/* <div className="d-flex justify-content-between"> */}
            <Button variant="primary" className="me-3">{single.link}</Button>
            {/* <div>
              <button onClick={counterVar.increment}>+1</button>
              <button onClick={counterVar.decrement}>-1</button>
            </div> */}
            {/* </div> */}
          </Card.Body>
        </Card>
    </Link>
      </Col>
  );
};

export default SingleCard;