import React, { use, useState } from "react";
import Bottle from "../bottle/Bottle";
import "./Bottles.css";

const Bottles = ({ bottlesPromise }) => {
  const [cart, setCart] = useState([]);

  const handleToBtnClick = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
  };
  const bottles = use(bottlesPromise);
  return (
    <div>
          <h1>Bottels : {bottles.length}</h1>
          <p>Added to cart : {cart.length}</p>
      <div className="cards">
        {bottles.map((bottle) => (
          <Bottle
            handleToBtnClick={handleToBtnClick}
            key={bottle.id}
            bottle={bottle}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
