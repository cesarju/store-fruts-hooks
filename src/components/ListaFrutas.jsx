/* eslint-disable react/prop-types */
import { CardFruta } from "./CardFurta";
function ListaFrutas({ lista }) {
  return (
    <div>
      <input />
      <ol className="container-list">
        {lista.map((elemento, index) => (
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
