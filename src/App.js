import { FiSearch } from "react-icons/fi";
import "./styles.css";

function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className="containerInput">
        <input type="text" placeholder="Digite seu cep..." />

        <button className="buttonSeach">
          <FiSearch size={25} color="#fff" />
        </button>
      </div>

      <main className="main">
        <h2>CEP: 83820-461</h2>

        <span>Rua: Bromelias </span>
        <span>Complemento: Casa </span>
        <span>Barro: Eucaliptos </span>
        <span>Fazenda Rio Grande - PR </span>
      </main>
    </div>
  );
}

export default App;
