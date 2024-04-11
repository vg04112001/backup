import { useEffect, useRef, useState } from 'react';

export default function Counter() {
  let ref = useRef(0);
  // console.log(ref)
  const [count, setCount] = useState(0);


  useEffect(()=> {
    console.log('re-render')
  })

  function handleClick() {
    ref.current = ref.current + 1;
    alert('You clicked ' + ref.current + ' times!');
  }

  function handleClickByState() {
    setCount(count + 1);
  }


  return (
    <>
    <button onClick={handleClick}>
      Click me!
    </button>
    <button onClick={handleClickByState}>
      You pressed me {count} times
    </button>
    </>
    
  );
}