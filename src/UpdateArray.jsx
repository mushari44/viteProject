import { useState } from "react";

function UpdateArray() {
  const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

  function handleAddFood() {
    const newFood = document.getElementById("foodInput").value;
    if (newFood != "") {
      setFoods((prevFoods) => [...prevFoods, newFood]);
      document.getElementById("foodInput").value = "";
      console.log(newFood);
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
      <input type="text" placeholder="Enter food name" id="foodInput"></input>
      <button onClick={handleAddFood}>Add food</button>
    </div>
  );
}
export default UpdateArray;
