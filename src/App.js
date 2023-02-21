import React from 'react';
import './style.css';
import { useState, useEffect } from 'react';
import InputSample from '../components/InputSample';

export default function App() {
  const [hello, setHello] = useState(0);

  // componentDidMount, componentDidUpdate -> componentWillUnmount
  // useLayoutEffect 동기적
  useEffect(() => {
  //  console.log('1');
    document.title = `You clicked ${hello} times`;
  }, []);

  const fn = () => {
    let newHello = { ...hello };
    newHello = hello + 1;
    setHello(newHello);
  };

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>{hello}</p>
      <InputSample />
    </div>
  );
}
