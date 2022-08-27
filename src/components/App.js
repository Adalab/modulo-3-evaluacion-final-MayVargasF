import "../styles/App.scss";
import logo from "../images/Harry-Potter-Logo.png";
import dataApi from "../services/fetch";
import { useEffect, useState } from "react";
import CharacterList from "./CharacterList";
import Filters from "./Filters";

function App() {
  const [dataCharacters, setDataCharcters] = useState([]);
  const [filterByHouse, SetFilterByHouse] = useState("all");
  useEffect(() => {
    dataApi().then((data) => {
      console.log(data);
      setDataCharcters(data);
    });
  }, []);

  const handleFilterByHouse = (value) => {
    SetFilterByHouse(value);
  };

  const characterFiltered = dataCharacters.filter((character) => {
    if (filterByHouse === "all") {
      return true;
    } else {
      return character.house === filterByHouse;
    }
  });

  return (
    <div className="body">
      <header className="header">
        <img src={logo} alt="Logo Harry Potter"></img>
      </header>
      <main className="main">
        <Filters
          filterByHouse={filterByHouse}
          handleFilterByHouse={handleFilterByHouse}
        />
        <CharacterList characters={characterFiltered} />
      </main>
    </div>
  );
}

export default App;
