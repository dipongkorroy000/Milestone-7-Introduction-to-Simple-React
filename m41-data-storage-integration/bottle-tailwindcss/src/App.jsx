import { Suspense } from "react";
import "./App.css";
import Bottles from "./assets/Bottles";
// import {
//   add,
//   diff,
//   div,
//   multiply,
//   square as sq,
// } from "./assets/utils/math/math";

function App() {
  //   const sum = add(5, 4);
  //   const biyog = diff(5, 2);
  //   const mul = multiply(5, 2);
  //   const division = div(6, 2);
  //   const square = sq(2, 4);
  //   console.log(sum, biyog, mul, division, square);

  // const bottlesPromise = fetch("../public/bottles.json").then(
  //   (res) => res.json()
  // );
  const bottlesPromise = fetch("../public/bottlesph.json").then((res) =>
    res.json()
  );
  return (
    <>
      <Suspense fallback={<h2>waiting for message...</h2>}>
        <Bottles bottlesPromise={bottlesPromise}></Bottles>
      </Suspense>
    </>
  );
}

export default App;
