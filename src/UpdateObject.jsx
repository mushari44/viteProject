import  { useState } from "react";
function UpdateObject() {
  const [car, setCar] = useState({
    year: 2024,
    make: "Ford",
    model: "Mustang",
  });
  function handleYearChange(event) {
    //update the year of the car instead of making a new (same as addFour function in counter.jsx file)
    setCar((car) => ({ ...car, year: event.target.value }));

    // setCar({ ...car, year: event.target.value }); without updating making a new one
    //same thing but more simpler
    // setCar({ year: event.target.value, make: car.make, model: car.model });
  }
  function handleMakeChange(event) {
    // c == previous state of the car object
    setCar((c) => ({ ...c, make: event.target.value }));
  }
  function handleModelChange(event) {
    setCar((c) => ({ ...c, model: event.target.value }));
  }
  return (
    <div>
      <h2>update object</h2>
      <p>
        your car is :{car.year} {car.make} {car.model}
      </p>
      <input type="number" value={car.year} onChange={handleYearChange} />
      <br></br>
      <input type="text" value={car.make} onChange={handleMakeChange} />
      <br></br>
      <input type="text" value={car.model} onChange={handleModelChange} />
      <br></br>
    </div>
  );
}

export default UpdateObject;
