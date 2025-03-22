// const jsonData = JSON.stringify(person);
// console.log(jsonData);
// const objData = JSON.parse(jsonData);
// console.log(objData);

// fetch("url")
//     .then(res => res.json())
//     .then(data => console.log(""));

// const person = {
//     name: 'jamal',
//     age: 40,
//     friends: ['kama', 'shah', 'raj'],
//     family: {
//         fatherName: 'sahidur',
//         motherName: 'jorina'
//     }
// }
// const keys = Object.keys(person);
// const values = Object.values(person);
// console.log(values);

const products = [
    { name: "radius", brand: "xiaomi", price: 3000, color: "black" },
    { name: "sam", brand: "samsung", price: 3500, color: "white" },
    { name: "iphone", brand: "apple", price: 4000, color: "gold" },
    { name: "vivo", brand: "vivo", price: 3800, color: "black" },
    { name: "walton", brand: "china", price: 2200, color: "black" },
    { name: "walton", brand: "china", price: 2800, color: "black" },
];
  
const newProduct = { name: "micro", brand: "micros", price: 3700, color: "blueYellow" };

const allProducts = [...products, newProduct];
// console.log(allProducts);

const remainingProducts = allProducts.filter(n => n.name !== 'walton');
console.log(remainingProducts);