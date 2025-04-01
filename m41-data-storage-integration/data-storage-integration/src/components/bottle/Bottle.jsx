import React from "react";
import "./Bottle.css";

const Bottle = ({ bottle, handleToBtnClick }) => {
  const { img, name, price, stock } = bottle;
  return (
    <div className="card">
      <img src={img} alt="" />
      <h3>Name : {name}</h3>
      <p>Price : {price}</p>
      <p>Available : {stock}</p>
      <button onClick={() => handleToBtnClick(bottle)}>Buy Now</button>
    </div>
  );
};

export default Bottle;
