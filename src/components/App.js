import "../styles/App.scss";
import logo from "../images/Harry-Potter-Logo.png";

import { useEffect, useState } from "react";
import { Route, Routes, matchPath, useLocation } from "react-router-dom";

import dataApi from "../services/fetch";
import localStorage from "../services/localStorage";

import CharacterList from "./CharacterList";
import Filters from "./Filters";
import Header from "./Header";
import CharacterDetail from "./CharacterDetail";

function App() {
  const [dataCharacters, setDataCharacters] = useState(
    localStorage.get("localData", [])
  );
  const [filterByHouse, SetFilterByHouse] = useState(
    localStorage.get("house", "Gryffindor")
  );
  const [filterByName, SetFilterByName] = useState(
    localStorage.get("name", "")
  );

  //Fetch and set in local storage if there's no data in local storage.

  useEffect(() => {
    if (dataCharacters.length === 0) {
      dataApi().then((data) => {
        setDataCharacters(data);
        localStorage.set("localData", data);
      });
    }
  }, []);

  //Set user search in local storage.

  useEffect(() => {
    localStorage.set("name", filterByName);
    localStorage.set("house", filterByHouse);
  }, [filterByName, filterByHouse]);

  //Set input values

  const handleFilterByHouse = (value) => {
    SetFilterByHouse(value);
  };

  const handleFilterByName = (value) => {
    SetFilterByName(value);
  };

  // Filters

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

  // Dynamic routes for character detail

  const { pathname } = useLocation();
  const dataPath = matchPath("/character/:characterId", pathname);

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
                  SetFilterByHouse={SetFilterByHouse}
                  SetFilterByName={SetFilterByName}
                />
                <CharacterList
                  characters={characterFiltered}
                  userSearch={filterByName}
                />
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
