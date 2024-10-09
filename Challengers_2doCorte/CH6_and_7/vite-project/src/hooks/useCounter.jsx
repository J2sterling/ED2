import { useState } from "react";

export const useCounter = (initialValue = 1) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const decrement = () => {
    if (counter > 1) setCounter((prevCounter) => prevCounter - 1);
  };

  const reset = () => {
    setCounter(initialValue);
  };

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
