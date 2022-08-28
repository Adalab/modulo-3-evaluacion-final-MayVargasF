import "../styles/components/characterList.scss";
import CharacterCard from "./CharacterCard";

function CharacterList(props) {
  const characterElements = props.characters.map((character, i) => (
    <CharacterCard character={character} key={i.toString()} />
  ));
  return (
    <section className="containerUl">
      <ul className="characterList">{characterElements}</ul>
    </section>
  );
}

export default CharacterList;
