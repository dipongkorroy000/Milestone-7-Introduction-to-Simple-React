import Counter from "./Counter";
import Batsman from "./Batsman";
import Users from "./Users";
import SecondUsers from "./SecondUsers";
import "./App.css";
import { Suspense } from "react";

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);

const secondUserFetch = async() => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  return res.json();
}

function App() {
  function handleClick() {
    alert("clicked");
  }
  const handleClick2 = () => {
    alert("clicked2");
  };
  const handleClick4 = (num) => {
    num += 5;
    alert(num);
  };

  const friendUser = secondUserFetch();

  return (
    <>
      {/* not use it
      <button onclick = "handleClick()">Click Me</button> */}
      {/* <button onClick={handleClick}>Click Me 1</button>
      <button onClick={handleClick2}>Click Me 2</button>
      <button onClick={() => alert("clicked3")}>Click Me 3</button>
      <button onClick={() => handleClick4(5)}>Click Me 4</button> */}

      {/* <Counter></Counter> */}
      {/* <Batsman></Batsman> */}

      {/* <Suspense fallback={<h3>loading...</h3>}>
        <Users fetchUsers = {fetchUsers}></Users>
      </Suspense> */}

      <Suspense fallback= {<h3>friendUser...</h3>}>
        <SecondUsers friendUser = {friendUser}></SecondUsers>
      </Suspense>
    </>
  );
}

export default App;
