// check these falsy values--
// "",0,-0,false,
// const test = false;
// if (test) {
//     console.log('this is truthy value');
// } else {
//     console.log('this is falsy value');
// }

// const result = 10 + "";
// console.log(typeof result); // string--
// const result2 = "10" - 0;
// console.log(typeof result2); // number--

const showUser = () => console.log("show user green");
const hideUser = () => console.log("hide user");

const isActive = true;
// isActive ? showUser() : hideUser();

// when isActive true then showUser() call, otherwise nothing--
isActive && showUser();

// when isActive false then hideUser() call, otherwise nothing--
isActive || hideUser();