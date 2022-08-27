import "../styles/App.scss";
import logo from "../images/Harry-Potter-Logo.png";
import dataApi from "../services/fetch";
import { useEffect, useState } from "react";
import CharacterList from "./CharacterList";

function App() {
  const [dataCharacters, setDataCharcters] = useState([]);
  useEffect(() => {
    dataApi().then((data) => {
      console.log(data);
      setDataCharcters(data);
    });
  }, []);

  return (
    <div className="body">
      <header className="header">
        <img src={logo} alt="Logo Harry Potter"></img>
      </header>
      <main className="main">
        <form className="form">
          <label htmlFor="searchCharacter" className="form_label">
            Busca por personaje:
          </label>
          <input
            className="form_input"
            type="searchCharacter"
            name="searchCharacter"
            id="searchCharacter"
            placeholder="Ej. Harry Potter"
          />
          <label htmlFor="searchHouse" className="form_label">
            Selecciona la casa:
          </label>
          <select name="searchHouse" id="searchHouse" className="form_input">
            <option value="all">Todos</option>
          </select>
        </form>
        <CharacterList characters={dataCharacters} />
      </main>
    </div>
  );
}

export default App;
