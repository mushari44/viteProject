import { useState } from "react";

function UpdateArrayOfObject() {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  function handleAddCar() {
    const newCar = { year: carYear, make: carMake, model: carModel };
    if (carYear !== "" && carMake !== "" && carModel !== "") {
      setCars((prevCars) => [...prevCars, newCar]);
      setCarYear("");
      setCarMake("");
      setCarModel("");
    }
  }
  function handleRemoveCar(index) {
    // "_" means this parameter is useless and we are not going to use it
    setCars((prevCars) => prevCars.filter((_, i) => index !== i));
  }
  function handleYearChange(event) {
    setCarYear(event.target.value);
  }
  function handleMakeChange(event) {
    setCarMake(event.target.value);
  }
  function handleModelChange(event) {
    setCarModel(event.target.value);
  }

  return (
    <div>
      <h1>List of Car object</h1>
      <ul>
        {cars.map((car, index) => (
          <li key={index} onClick={() => handleRemoveCar(index)}>
            {car.year} {car.make} {car.model}
          </li>
        ))}
      </ul>
      <input value={carYear} type="number" onChange={handleYearChange}></input>
      <br></br>
      <input
        value={carMake}
        type="text"
        onChange={handleMakeChange}
        placeholder="Enter car make"
      ></input>
      <br></br>
      <input
        value={carModel}
        type="text"
        onChange={handleModelChange}
        placeholder="Enter car model"
      ></input>
      <br></br>
      <button onClick={handleAddCar}>Add car</button>
    </div>
  );
}
export default UpdateArrayOfObject;
