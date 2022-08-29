import "../styles/App.scss";
import logo from "../images/Harry-Potter-Logo.png";
import dataApi from "../services/fetch";
import { useEffect, useState } from "react";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import Header from "./Header";
import { Route, Routes, matchPath, useLocation } from "react-router-dom";
import CharacterDetail from "./CharacterDetail";
import localStorage from "../services/localStorage";

function App() {
  const [dataCharacters, setDataCharacters] = useState([]);
  const [filterByHouse, SetFilterByHouse] = useState("all");
  const [filterByName, SetFilterByName] = useState("");

  useEffect(() => {
    dataApi().then((data) => {
      setDataCharacters(data);
      localStorage.set("localData", data);
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

  const { pathname } = useLocation();
  const dataPath = matchPath("/character/:characterId", pathname);
  console.log(dataPath);

  const characterId = dataPath !== null ? dataPath.params.characterId : null;
  const characterFound = dataCharacters.find((character) => {
    return character.id === characterId;
  });

  return (
    <div className="body">
      <Header logo={logo} />
      <Routes>
        <Route
          path="/"
          element={
            <>
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
          element={<CharacterDetail character={characterFound} />}
        />
      </Routes>
    </div>
  );
}

export default App;
