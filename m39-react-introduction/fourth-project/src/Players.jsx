import { useEffect, useState } from "react";
// it's old topic uses for --

export default function Players() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  return (
    <div className="post-style">
      <h2>Players : {players.length}</h2>
      <ol>
        {players.map((player) => (
          <li key={player.id} className="post-style">{player.name}</li>
        ))}
      </ol>
    </div>
  );
}
