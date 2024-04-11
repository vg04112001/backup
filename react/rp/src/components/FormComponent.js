import React, { useState } from "react";

const FormComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  // useEffect(()=> {
  //   console.log('re-render')
  // },[])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
