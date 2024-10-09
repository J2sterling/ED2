import React, { useState } from 'react';

const FirstApp = ({ value }) => {
  // Estado para el contador
  const [counter, setCounter] = useState(value);

  // Función para sumar
  const handleAdd = () => {
    setCounter(counter + 1);
  };

  // Función para restar
  const handleSubstract = () => {
    setCounter(counter - 1);
  };

  // Función para resetear
  const handleReset = () => {
    setCounter(value);
  };

  return (
    <>
      <h1>Counter</h1>
      <span>{counter}</span>
      <br />
      {/* Botón para sumar */}
      <button onClick={handleAdd}>+1</button>
      {/* Botón para restar */}
      <button onClick={handleSubstract}>-1</button>
      {/* Botón para resetear */}
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

export default FirstApp;