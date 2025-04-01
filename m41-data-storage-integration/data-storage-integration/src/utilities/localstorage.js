const getCartFromLs = () => {
  const storedCartString = localStorage.getItem("cart");
  if (storedCartString) {
    const storedCart = JSON.parse(storedCartString);
    return storedCart;
    }
    return [];
};

const addItemToCartLocalStorage = id => {
    const cart = getCartFromLs();
    // cart.push(id);
    // alternative--
    const newCart = [...cart, id];

    // save new cart to the local storage --
    
}