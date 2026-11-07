import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(() => {
    // lazy initialization useful for expensive computation at inital state
    console.log("Counter component initialized");
    return 0;
  });

  const handleClick = () => {
    setCount(count + 1);
  };

  return <button onClick={handleClick}>Count: {count}</button>;
};
