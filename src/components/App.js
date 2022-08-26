import "../styles/App.scss";
import logo from "../images/Harry-Potter-Logo.png";
import picture from "../images/harry.jpg";

function App() {
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
        <section className="containerUl">
          <ul className="characterList">
            <li className="characterList_item">
              <img
                className="characterList_item-picture"
                src={picture}
                alt="Character picture"
              ></img>
              <h1 className="characterList_item-name">Nombre personaje</h1>
              <p className="characterList_item-specie">Especie</p>
            </li>
            <li className="characterList_item">
              <img
                className="characterList_item-picture"
                src={picture}
                alt="Character picture"
              ></img>
              <h1 className="characterList_item-name">Nombre personaje</h1>
              <p className="characterList_item-specie">Especie</p>
            </li>
            <li className="characterList_item">
              <img
                className="characterList_item-picture"
                src={picture}
                alt="Character picture"
              ></img>
              <h1 className="characterList_item-name">Nombre personaje</h1>
              <p className="characterList_item-specie">Especie</p>
            </li>
            <li className="characterList_item">
              <img
                className="characterList_item-picture"
                src={picture}
                alt="Character picture"
              ></img>
              <h1 className="characterList_item-name">Nombre personaje</h1>
              <p className="characterList_item-specie">Especie</p>
            </li>
            <li className="characterList_item">
              <img
                className="characterList_item-picture"
                src={picture}
                alt="Character picture"
              ></img>
              <h1 className="characterList_item-name">Nombre personaje</h1>
              <p className="characterList_item-specie">Especie</p>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
