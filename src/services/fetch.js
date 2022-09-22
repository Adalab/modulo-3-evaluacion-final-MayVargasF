import uuid from "react-uuid";

const getDataApi = () => {
  return fetch("https://hp-api.herokuapp.com/api/characters")
    .then((response) => response.json())
    .then((data) => {
      const dataClean = data.map((character) => {
        return {
          id: uuid(),
          name: character.name,
          species: character.species,
          image: character.image,
          house: character.house,
          alive: character.alive,
          gender: character.gender,
          alternate_names: character.alternate_names,
        };
      });
      return dataClean;
    });
};

export default getDataApi;
