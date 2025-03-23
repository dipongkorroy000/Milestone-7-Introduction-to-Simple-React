import { useState } from "react";

export default function Counter() {
  const [count, secCount] = useState(0);

  const handelAdd = () => {
      // console.log("add btn clicked");
      const newCount = count + 1;
    secCount(newCount);
  };

  const divStyle = {
    border: "2px solid yellow",
    borderRadius: "1rem",
  };
  return (
    <div style={divStyle}>
      <h3>Count: {count}</h3>
      <button onClick={handelAdd}>Add</button>
    </div>
  );
}
