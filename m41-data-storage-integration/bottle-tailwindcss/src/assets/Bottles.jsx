import { use, useEffect, useState } from "react";
import Bottle from "./Bottle";
import {
  addStoreCart,
  getStoreCart,
  removeCard,
} from "./utils/localStorage/localstorage";
import Cart from "./utils/cart/Cart";

const Bottles = ({ bottlesPromise }) => {
  // useEffect ---

  const [cart, setCart] = useState([]);
  const handleClick = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);

    // save the bottle id in the localstorage --
    addStoreCart(bottle.id);
  };

  const bottles = use(bottlesPromise);

  useEffect(() => {
    const storedCardIds = getStoreCart();
    // console.log(storedCardIds);
    const storedCart = [];

    for (const id of storedCardIds) {
      // console.log(id)
      const cartBottle = bottles.find((bottle) => bottle.id === id);
      if (cartBottle) {
        storedCart.push(cartBottle);
      }
    }

    // console.log("stored cart", storedCart);
    setCart(storedCart);
  }, [bottles]);

  const handleRemoveFromCart = (id) => {
    const remainingCart = cart.filter((bottle) => bottle.id !== id);
    setCart(remainingCart);
    removeCard(id);
  };

  return (
    <div>
      <p className="font-semibold text-3xl text-left">
        Bottles : {bottles.length}
      </p>
      <p className="text-left my-3 text-xl">Added to cart : {cart.length}</p>
      <div>
        <Cart handleRemoveFromCart={handleRemoveFromCart} cart={cart}></Cart>
      </div>
      <div className="grid grid-cols-3 gap-5 rounded-xl mt-5">
        {bottles.map((bottle) => (
          <Bottle
            handleClick={handleClick}
            key={bottle.id}
            bottle={bottle}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
