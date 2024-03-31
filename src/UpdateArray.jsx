import { useState } from "react";

function UpdateArray() {
  const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);
  const [errorMessage, setErrorMessage] = useState("");
  function handleAddFood() {
    const newFood = document.getElementById("foodInput").value;
    if (newFood.trim() !== "") {
      setFoods((prevFoods) => [...prevFoods, newFood]);
      document.getElementById("foodInput").value = "";
      setErrorMessage("");
    } else {
      setErrorMessage("Please enter a food");
    }
  }
  function handleRemoveItem(index) {
    // setFoods((prevFoods) => {
    //   const updatedFoods = [...prevFoods];
    //   updatedFoods.splice(index, 1);
    //   return updatedFoods;
    // });
    setFoods(foods.filter((element, i) => i !== index));
  }

  return (
    <div>
      <h2>list of foods</h2>
      <ul>
        {foods.map((food, index) => (
          <li key={index} onClick={() => handleRemoveItem(index)}>
            {food}
          </li>
        ))}
      </ul>
      {/* If errorMessage is truthy (i.e., not an empty string, null, or undefined)
      <h3>{errorMessage}</h3> will be rendered. */}
      {errorMessage ? <h3>{errorMessage}</h3> : null}
      <input type="text" placeholder="Enter food name" id="foodInput"></input>
      <button onClick={() => handleAddFood()}>Add food</button>
    </div>
  );
}
export default UpdateArray;
