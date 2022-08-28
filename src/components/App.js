import "../styles/App.scss";
import logo from "../images/Harry-Potter-Logo.png";
import dataApi from "../services/fetch";
import { useEffect, useState } from "react";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import CharacterDetail from "./CharacterDetail";

function App() {
  const [dataCharacters, setDataCharcters] = useState([]);
  const [filterByHouse, SetFilterByHouse] = useState("all");
  const [filterByName, SetFilterByName] = useState("");

  useEffect(() => {
    dataApi().then((data) => {
      console.log(data);
      setDataCharcters(data);
    });
  }, []);

  const handleFilterByHouse = (value) => {
    SetFilterByHouse(value);
  };

  const handleFilterByName = (value) => {
    SetFilterByName(value);
  };

  const characterFiltered = dataCharacters

    .filter((character) => {
      if (filterByHouse === "all") {
        return true;
      } else {
        return character.house === filterByHouse;
      }
    })
    .filter((character) => {
      return character.name.toLowerCase().includes(filterByName.toLowerCase());
    });

  return (
    <div className="body">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header logo={logo} />

              <main className="main">
                <Filters
                  filterByHouse={filterByHouse}
                  handleFilterByHouse={handleFilterByHouse}
                  filterByName={filterByName}
                  handleFilterByName={handleFilterByName}
                />
                <CharacterList characters={characterFiltered} />
              </main>
            </>
          }
        />
        <Route
          path="/character/:characterId"
          element={
            <>
              <Header logo={logo} /> <CharacterDetail />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
