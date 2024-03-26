import { useState } from "react";

function Counter() {
  const [number, setNumber] = useState(0);
  const increment = () => {
    setNumber(number + 1);
  };
  const decrement = () => {
    setNumber(number - 1);
  };
  const reset = () => {
    setNumber(0);
  };
  return (
      <div className="CounterCard">
        <h2>{number}</h2>
        <button onClick={decrement}>Decrement </button>
        <button onClick={reset}>Reset </button>
        <button onClick={increment}>Increment </button>
      </div>
  );
}
export default Counter;
