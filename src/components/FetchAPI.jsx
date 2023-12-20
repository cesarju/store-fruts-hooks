import { useEffect, useState } from "react";

export function FetchAPI() {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((obj) => setLista(obj.results));
  }, []);

  return (
    <div>
      <h1>Poke API</h1>
      {lista.map((item, index) => (
        <h3 key={index}>{item.name}</h3>
      ))}
    </div>
  );
}
