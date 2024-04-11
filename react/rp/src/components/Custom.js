import React from 'react'
import Button from 'react-bootstrap/Button';

const Custom = (props) => {
  // console.log(props)
  const user = {
    email: 'a@b.com',
  }
  const handler = () => {
    props.sendData(user)
  }
  return (
    <>
    <div>
      Custom component
      {/* <br/> */}
    </div>
      <div>{props.pass}</div>
      <Button variant="success" onClick={handler} >Click Here</Button>
    </>
  )
}

export default Custom
