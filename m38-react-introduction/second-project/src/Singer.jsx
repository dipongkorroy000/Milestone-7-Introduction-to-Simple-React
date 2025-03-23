import "./App.css";
export default function Singer({sin}) {
  return (
    <div className="singer-style">
          <h3>Name: {sin.name}</h3>
          <h3>Age: {sin.age}</h3>
    </div>
  );
}
