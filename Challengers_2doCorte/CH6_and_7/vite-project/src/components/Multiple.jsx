import React, { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { CounterDisplay } from "./CounterDisplay";

export const Multiple = () => {
  const [quoteId, setQuoteId] = useState(1);
  const { data, isLoading, hasError } = useFetch(
    `https://breakingbadapi.com/api/quotes/${quoteId}`
  );

  const handleCounterChange = (newCounter) => {
    setQuoteId(newCounter);
  };

  return (
    <div>
      <h1>Breaking Bad Quotes</h1>

      <CounterDisplay onCounterChange={handleCounterChange} />

      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <blockquote>{data && data[0].quote}</blockquote>
      )}

      {hasError && <h2>Something went wrong...</h2>}
    </div>
  );
};

