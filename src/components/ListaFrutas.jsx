/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { CardFruta } from "./CardFurta";

function ListaFrutas({ lista }) {
  const [listaFrutas, setListaFrutas] = useState(lista);
  const [nombre, setNombre] = useState("");
  const [logo, setLogo] = useState("");

  function handleAddFruts() {
    const newFruts = {
      nombre: nombre,
      color: "Rojo",
      sabor: "Dulce",
      logo: logo,
      precio: 20,
    };
    setListaFrutas([...listaFrutas, newFruts]);
  }

  console.log("render 1");

  /* useEffect */
  useEffect(() => {
    console.log("Efecto de useEffect");
  }, [nombre, logo]);

  console.log("render 2");

  return (
    <div>
      <input
        placeholder="Add fruts"
        /* onChange escucha los cambios del input */
        onChange={(event) => {
          setNombre(event.target.value);
        }}
      />
      <input
        placeholder="Add logo"
        onChange={(event) => {
          setLogo(event.target.value);
        }}
      />
      <button onClick={handleAddFruts}>Add</button>
      <ol className="container-list">
        {listaFrutas.map((elemento, index) => (
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
