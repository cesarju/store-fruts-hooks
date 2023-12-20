import "./cardFrutas.css";
// eslint-disable-next-line react/prop-types
function CardFruta({ nombre, color, precio, logo, sabor }) {
  return (
    <li className="container">
      <h1 className="logo">{logo}</h1>
      <div className="card">
        <h2>Nombre: {nombre}</h2>
        <p>Color: {color}</p>
        <p>Sabor: {sabor}</p>
        <p>Precio: {precio}</p>
        <div className="count">
          <button>Comprar</button>
        </div>
        <button>Editar</button>
      </div>
    </li>
  );
}
export { CardFruta };
