const getCartFromLocalstorage = () => {
  const storedCartString = localStorage.getItem("cart");
  if (storedCartString) {
    const storedCart = JSON.parse(storedCartString);
    return storedCart;
  } else {
    return [];
  }
};

const saveCartToLocalstorage = (cart) => {
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};

const addItemToCartLocalstorage = (id) => {
  const cart = getCartFromLocalstorage();
  //   cart.push(id);
  // alternative--
  const newCart = [...cart, id];

  // save now cart to the localstorage --
  saveCartToLocalstorage(newCart);
};

const removeFromLocalstorage = (id) => {
  const storedCart = getCartFromLocalstorage();
  const remainingCart = storedCart.filter((storedId) => storedId !== id);
  saveCartToLocalstorage(remainingCart);
};

export {
  getCartFromLocalstorage as getStoreCart,
  addItemToCartLocalstorage as addStoreCart,
  removeFromLocalstorage as removeCard
};
