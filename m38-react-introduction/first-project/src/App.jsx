import "./App.css";

function App() {
  return (
    <>
      <h1>React Core Concepts</h1>
      <Sports></Sports>
      <Person />
      <Student></Student>
      <Developer name="saba" tech="Py"></Developer>
      <Developer name="san" tech="JS"></Developer>
      <Developer name="didy" tech="C"></Developer>
      <Player name="tamil" runs="5000"></Player>
      <Player name="raja"></Player>
    </>
  );
}

function Sports() {
  return (
    <div className="student">
      <h3>game:</h3>
      <p>Player:</p>
    </div>
  );
}

// third technique--css style add --
function Student() {
  return (
    <div className="student">
      <p>Name :</p>
      <p>Department :</p>
    </div>
  );
}
// second technique--css style add --
function Person() {
  const age = 17;
  const fullName = "jolil";

  const personStyle = {
    color: "yellowgreen",
    border: "2px solid teal",
    textAlign: "left",
    padding: "5px",
    borderRadius: "5px",
  };
  return (
    <p style={personStyle}>
      I am a Person: {fullName} {age}
    </p>
  );
}

// first technique--css style add --
function Developer(props) {
  // console.log(props);
  return (
    <div
      style={{
        border: "2px solid green",
        borderRadius: "10px",
      }}
    >
      <h3>Developer: {props.name}</h3>
      <h3>Technology: {props.tech}</h3>
    </div>
  );
}

// players--

// const { name, runs } = { name: "tamil", runs: "5000" };
function Player({ name, runs = 0 }) {
  // console.log(name, runs);
  return (
    <div className="player">
      <h3>Name: {name}</h3>
      <p>Runs: {runs}</p>
    </div>
  );
}

export default App;