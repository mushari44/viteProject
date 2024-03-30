import { useState } from "react";

function Counter() {
  const [number, setNumber] = useState(0);
  const increment = () => {
    setNumber(number + 1);
    setNumber(number + 1);
    // it will ony add 1  because we are not updating the number
    //  setNumber(0 + 1);
    //  setNumber(0 + 1);
  };
  const decrement = () => {
    setNumber(num=>number - 1);
  };
  const reset = () => {
    setNumber(0);
  };
  const addFour = () => {
    setNumber(c => c + 2); // if i click it will add 4 because we are updating the number value 
    setNumber((c) => c + 2);
  };
  return (
    <div className="CounterCard">
      <h2>{number}</h2>
      <button onClick={decrement}>Decrement </button>
      <button onClick={reset}>Reset </button>
      <button onClick={increment}>Increment </button>
      <button onClick={addFour}>update function </button>
    </div>
  );
}
export default Counter;
