import React, { useState } from "react";
function ColorPicker() {
  const [color, setColor] = useState("#c0c0c0");
  function handleColorChange(event) {
    setColor(event.target.value);
  }
  return (
    <div className="colorPicker">
      <h1>Color Picker</h1>
      <div
        className="colorDisplay"
        style={{
          backgroundColor: color,
        }}
      >
        <p>selected color: {color}</p>
      </div>
      <label>select a color : </label>
      <input type="color" value={color} onChange={handleColorChange} />
    </div>
  );
}
export default ColorPicker;
