import React, { useState } from 'react';
const myState = (num) => {
  const [count, setCount] = useState(num);
  const increment = () => {
    setCount(count + 1);
  };
  return [count, increment];
};
export default myState;
