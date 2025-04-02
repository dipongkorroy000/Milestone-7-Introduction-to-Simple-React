import React from "react";

const Bottle = ({ bottle, handleClick }) => {
  const {
    img,
    name,
    ratingsCount,
    ratings,
    stock,
    price,
    seller,
    shipping,
    quantity,
  } = bottle;
  return (
    <div className="border-2 p-5 text-left rounded-xl space-y-5">
      <div>
        <img className="rounded-xl mb-3" src={img} alt="bottle image" />
        <p>Bottle : {name}</p>
        <p>Price : ${price}</p>
        <p>Available : {stock}</p>
        <p>Ratings : {ratings}</p>
        <p>RatingsCount : {ratingsCount}</p>
        <p>Shipping : {shipping}</p>
        <p>Quantity : {quantity}</p>
        <p>Seller : {seller}</p>
      </div>
      <button onClick={() => handleClick(bottle)}>Buy Now</button>
    </div>
  );
};

export default Bottle;
