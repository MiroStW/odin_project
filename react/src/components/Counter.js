import React, { useEffect, useState } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(0);

  const increaseCounter = () => {
    setCount(count + 1);
  };
  try {
    return (
      <div className="counter">
        <button onClick={() => increaseCounter()}>Click Me!</button>
        <p>Counter: {count}</p>
      </div>
    );
  } catch (error) {
    console.log("render", error);
    return <div>We have encountered an error! {error.message}</div>;
  }
};

export default Counter;
