import React, { useState } from 'react'
import ChildToParent from './ChildToParent'
// import Counter from './Counter'

type ParentToChild = {
  parentToChild: string
}

type UserEmail = {
  email: string;
}

const Home = ({parentToChild}:ParentToChild) => {
  const [data, setData] = useState<UserEmail>({email: ''});
  // const [data, setData] = useState<{email: string}>({email: ''});
  const sendData = (data: {email: string}) => {
    setData(data)
  }
  return (
    <div>
       <div>
        Home Page
        <ChildToParent sendData={sendData}/>
        <div>{data.email}</div>
      </div>
      <div>
        {parentToChild}
      </div>
      {/* <Counter/> */}
    </div>
  )
}

export default Home
