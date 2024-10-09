import React from 'react';
import { useCounter } from '../hooks/useCounter';

export const CounterApp = () => {
    // Utilizamos el hook personalizado con valor inicial de 5
    const { counter, increment, decrement, reset } = useCounter(5);

    return (
        <div className="counter-container">
            <h1>Counter App</h1>
            <h2>{counter}</h2>

            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
};
