import { Suspense } from "react";
import "./App.css";
import Countries from "./components/Countries/Countries";

function App() {
  const countryPromise = fetch("https://restcountries.com/v3.1/all").then((res) =>
    res.json()
  );

  return (
    <>
      <h1>Vite + React</h1>
      <Suspense fallback={<span>Waiting for message....</span>}>
        <Countries countryPromise={countryPromise}></Countries>
      </Suspense>
    </>
  );
}

export default App;
