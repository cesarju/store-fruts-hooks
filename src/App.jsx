import Header from "./components/Header";
import { ListaFrutas } from "./components/ListaFrutas";

const listaFrutas = [
  { nombre: "Manzana", color: "Rojo", sabor: "Dulce", logo: "🍎", precio: 20 },
  {
    nombre: "Plátano",
    color: "Amarillo",
    sabor: "Dulce",
    logo: "🍌",
    precio: 70,
  },
  { nombre: "Fresa", color: "Rojo", sabor: "Dulce", logo: "🍓" },
  { nombre: "Uva", color: "Morado", sabor: "Dulce", logo: "🍇", precio: 100 },
  {
    nombre: "Limón",
    color: "Amarillo",
    sabor: "Ácido",
    logo: "🍋",
    precio: 40,
  },
];

function App() {
  return (
    <div style={{ backgroundColor: "#f2ffbc", height: "100vh" }}>
      <Header title="Clase 02 de Reat - componentes" />
      <ListaFrutas lista={listaFrutas} />
    </div>
  );
}
export default App;
