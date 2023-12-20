import { useState } from "react";
import "./cardFrutas.css";
// eslint-disable-next-line react/prop-types
function CardFruta({ nombre, color, precio, logo, sabor }) {
  const [count, setCount] = useState(0);

  return (
    <li className="container">
      <h1 className="logo">{logo}</h1>
      <div className="card">
        <h2>Nombre: {nombre}</h2>
        <p>Color: {color}</p>
        <p>Sabor: {sabor}</p>
        <p>Precio: {precio}</p>
        <div className="count">
          <button onClick={() => setCount(count - 1)}>-</button>
          <h3>{count}</h3>
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>
        <button>Editar</button>
      </div>
    </li>
  );
}
export { CardFruta };
