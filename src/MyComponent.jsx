import React, { useState } from "react";
function MyComponent() {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false);
  const updateName = () => {
    // if you  used this it will not work you have to use the set method to change the name
    // name = "Mushari";
    setName("Mushari");
  };
  const incrementAge = () => {
    setAge(age + 1);
  };
  const changeStatus = () => {
    setIsEmployed(!isEmployed);
  };
  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>set name</button>
      <p>age: {age}</p>
      <button onClick={incrementAge}>increment age</button>
      <p>is employed? {isEmployed ? "Yes" : "No"}</p>
      <button onClick={changeStatus}>change status </button>
    </div>
  );
}
export default MyComponent;
