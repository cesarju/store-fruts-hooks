/* eslint-disable react/prop-types */
import { CardFruta } from "./CardFurta";
import { useState } from "react";
function ListaFrutas({ lista }) {
  const [name, setName] = useState("");
  const [logo, setLogo] = useState("");
  const [listFruts, setListFruts] = useState(lista);

  const handleAddItem = () => {
    const newItem = {
      nombre: name,
      logo: logo,
      color: "Rojo",
      precio: 15,
    };

    setName("");
    setLogo("");
    setListFruts([...listFruts, newItem]);
  };

  return (
    <div>
      <input
        value={name}
        placeholder="Add name frut"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        value={logo}
        placeholder="Add logo frut"
        onChange={(e) => setLogo(e.target.value)}
      />
      <button onClick={handleAddItem}>Add</button>
      <ol className="container-list">
        {listFruts.map((elemento, index) => (
          <CardFruta
            key={index}
            nombre={elemento.nombre}
            precio={elemento.precio}
            logo={elemento.logo}
            color={elemento.color}
            sabor={elemento.sabor}
          />
        ))}
      </ol>
    </div>
  );
}

export { ListaFrutas };
