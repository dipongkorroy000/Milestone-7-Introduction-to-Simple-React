const friends = ['raju', 'saju', 'kaju', 'modu'];
// console.log(...friends);
// const friendsName = [...friends, 'jadu'];
// console.log(friendsName);

// function main(a, b) {
//   console.log(arguments);
//     console.log(...arguments);
//     let sum = a + b;
//     // console.log(sum);
// }
// main(4, 5);

const products = [
  { name: "radius", brand: "xiaomi", price: 3000, color: "black" },
  { name: "sam", brand: "samsung", price: 3500, color: "white" },
  { name: "iphone", brand: "apple", price: 4000, color: "gold" },
  { name: "vivo", brand: "vivo", price: 3800, color: "black" },
  { name: "walton", brand: "china", price: 3900, color: "black" },
];
const name = products.map(product => product.name);
const brand = products.map(product => product.brand);
const price = products.map(product => product.price);
const color = products.map(product => product.color);
// console.log(name, brand);
// products.forEach(product => console.log(product));

const result = products.filter(product => product.price <= 3500);
// console.log(result);

const result2 = products.find(product => product.color === 'gold');
// console.log(result2);