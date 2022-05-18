import React from 'react';
import './style.css';
import myState from './myState';
export default function App() {
  const [count, increment] = myState(1);
  return (
    <div>
      {count}
      <button onClick={increment}>count</button>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
