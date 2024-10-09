import React from "react";
import { useCounter } from "../hooks/useCounter";

export const CounterDisplay = ({ onCounterChange }) => {
  const { counter, increment, decrement, reset } = useCounter();

  const handleIncrement = () => {
    increment();
    onCounterChange(counter + 1);
  };

  const handleDecrement = () => {
    decrement();
    onCounterChange(counter - 1);
  };

  const handleReset = () => {
    reset();
    onCounterChange(1);
  };

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={handleIncrement}>+1</button>
      <button onClick={handleDecrement}>-1</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

