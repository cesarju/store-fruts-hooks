import "./cardFrutas.css";
function CardFruta({ nombre, color, precio, logo, sabor }) {
  if (precio < 50) {
    return (
      <li className="card">
        <input type="checkbox" />
        <h2>Nombre: {nombre}</h2>
        <h1>{logo}</h1>
        <p>Color: {color}</p>
        <p>Sabor: {sabor}</p>
        <p>Precio: {precio}</p>
        <button>Comprar</button>
        <button>Editar</button>
      </li>
    );
  } else {
    return (
      <li className="card">
        <input type="checkbox" />

        <h2>Nombre: {nombre}</h2>
        <h1>{logo}</h1>
        <p>Color: {color}</p>
        <p>Precio: {precio}</p>
        <button>Comprar</button>
        <button>Editar</button>
      </li>
    );
  }
}
export { CardFruta };
/*  return (
       <div>
         {precio && (
           <li>
             <h2>Nombre: {nombre}</h2>
             <p>Color: {color}</p>
             <p>Precio: {precio}</p>
           </li>
         )}
       </div>
     ); */
