import { useState } from 'react';

export const useCounter = (initialValue = 0) => {
    const [counter, setCounter] = useState(initialValue);

    // Función para incrementar
    const increment = () => {
        setCounter(counter + 1);
    };

    // Función para decrementar
    const decrement = () => {
        setCounter(counter - 1);
    };

    // Función para resetear
    const reset = () => {
        setCounter(initialValue);
    };

    // Retornamos el contador y las funciones
    return {
        counter,
        increment,
        decrement,
        reset
    };
};
