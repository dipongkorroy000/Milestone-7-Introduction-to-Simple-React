import ToDo from "./ToDo.jsx";
import Actor from "./Actor.jsx";
import Singer from "./Singer.jsx";
import "./App.css";

function App() {
  const time = 400;

  const actors = ["sal", "sha", "raj", "jas", "manna"];
  const singers = [
    { id: 1, name: "hake", age: 68 },
    { id: 1, name: "taj", age: 68 },
    { id: 1, name: "akam", age: 68 },
  ];

  return (
    <>
      <h1>React Core Concepts</h1>
      {/* <ToDo task="Learn React" isDone={false}></ToDo>
      <ToDo task="Learn JS" isDone={true} time={time}></ToDo>
      <ToDo task="Learn Java" isDone={false}></ToDo>
      <ToDo task="Learn py" isDone={true} time="500"></ToDo> */}

      {/* {actors.map((actor) => (
        <Actor name={actor}></Actor>
      ))} */}

      {singers.map((singer) => (
        <Singer
          key={singer.id} sin = {singer}
        ></Singer>
      ))}
    </>
  );
}

export default App;
