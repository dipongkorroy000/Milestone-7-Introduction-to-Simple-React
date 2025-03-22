const person = {
    fullName: "rahima",
    age: 20,
    friends: ['salma', 'sajna', 'jalma'],
    10: "secret code",
    "name":"jorina"
};

const personName = person.fullName;
// alternative--
const personName2 = person["fullName"];
console.log(personName2);

const secretCode = person["10"];
console.log(secretCode);

const name = person["name"];
console.log(name);