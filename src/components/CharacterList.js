import "../styles/components/characterList.scss";
import picture from "../images/harry.jpg";
import CharacterCard from "./CharacterCard";

function CharacterList(props) {
  const userElements = props.characters.map((character, i) => {
    return (
      <li key={i} className="characterList_item">
        <img
          className="characterList_item-picture"
          src={character.image}
          alt={character.name}
        ></img>
        <h1 className="characterList_item-name">{character.name}</h1>
        <p className="characterList_item-specie">{character.species}</p>
      </li>
    );
  });
  return (
    <section className="containerUl">
      <ul className="characterList">
        {/* <CharacterCard characters={props.characters} /> */}
        {userElements}
      </ul>
    </section>
  );
}

export default CharacterList;
