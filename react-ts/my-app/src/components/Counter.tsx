import { useEffect, useRef } from 'react';

export default function Counter() {
  let ref = useRef(0);

  // useEffect(()=> {
  //   console.log('re-render')
  // })

  function handleClick() {
    ref.current = ref.current + 1;
    alert('You clicked ' + ref.current + ' times!');
  }

  return (
    <button onClick={handleClick}>
      Click me!
    </button>
  );
}