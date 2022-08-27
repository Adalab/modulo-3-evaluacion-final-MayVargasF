import "../styles/components/characterList.scss";
import CharacterCard from "./CharacterCard";

function CharacterList(props) {
  const userElements = props.characters.map((character, i) => {
    return <CharacterCard character={character} i={i} />;
  });
  return (
    <section className="containerUl">
      <ul className="characterList">{userElements}</ul>
    </section>
  );
}

export default CharacterList;
