import { useState } from "react";

export const useCounter = (initialValue = 10) => {
  const [Counter, setCounter] = useState(initialValue);
  const Increment = (value = 1) => {
    setCounter((current) => current + value);
  };
  const Decrement = (value = 1) => {
    if (Counter === 0) return;
    setCounter((current) => current - value);
  };
  const Reset = () => {
    setCounter(initialValue);
  };

  return {
    Counter,
    Increment,
    Decrement,
    Reset,
  };
};
