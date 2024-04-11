import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function ALT() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Alert show={show} variant="success">
        <Alert.Heading>My Alert</Alert.Heading>
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me
          </Button>
        </div>
      </Alert>

      {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
    </>
  );
}

export default ALT;