import { useState } from "react";

export function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div className="count">
      {/*el boton tiene un evento de onClick acciona a una funcion */}
      <button
        onClick={() => {
          setContador(contador - 1);
        }}
      >
        -
      </button>
      <h1>{contador}</h1>
      <button
        onClick={() => {
          setContador(contador + 1);
        }}
      >
        +
      </button>
    </div>
  );
}
