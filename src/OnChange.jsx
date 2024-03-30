import React, { useState } from "react";
function OnChange() {
  // we use on change for form elements/inputs ex.<input> , <textarea> ,<select>, <radio>..
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("");
  const quantityChange = (event) => {
    // console.log(event);
    setQuantity(event.target.value);
  };
  const nameChange = (event) => {
    // console.log(event);
    setName(event.target.value);
  };
  function commentChange(event) {
    setComment(event.target.value);
  }
  function paymentChange(event) {
    setPayment(event.target.value);
  }
  function shippingChange(event) {
    setShipping(event.target.value);
  }
  return (
    <div className="onChange">
      <input value={name} onChange={nameChange}></input>
      <p>name : {name}</p>
      <input value={quantity} onChange={quantityChange} type="number"></input>
      <p>quantity : {quantity}</p>
      <textarea
        value={comment}
        onChange={commentChange}
        placeholder="please leave a comment"
      ></textarea>
      <p>Comment : {comment}</p>

      <select value={payment} onChange={paymentChange}>
        <option hidden={true}>select an option</option>
        <option value="Visa">visa</option>
        <option value="Mastercard">Mastercard</option>
        <option value="Giftcard">Giftcard</option>
      </select>
      <p>payment : {payment}</p>
      <label>
        Pick up
        <input
          type="radio"
          value="Pick up"
          checked={shipping === "Pick up"}
          onChange={shippingChange}
        />
      </label>
      <br></br>
      <label>
        Delivery
        <input
          type="radio"
          value="Delivery"
          checked={shipping === "Delivery"}
          onChange={shippingChange}
        />
      </label>
      <p>shipping: {shipping}</p>
    </div>
  );
}
export default OnChange;
