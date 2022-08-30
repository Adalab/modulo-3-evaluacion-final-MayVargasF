import "../styles/components/characterList.scss";
import CharacterCard from "./CharacterCard";

function CharacterList(props) {
  if (props.characters.length === 0) {
    return (
      <>
        <section className="containerUl">
          <p className="containerUl_msg">
            Sorry, there's no characters with "{props.userSearch}". Please, try
            again with another name.
          </p>
        </section>
      </>
    );
  } else {
    const characterElements = props.characters.map((character, i) => (
      <CharacterCard character={character} key={i.toString()} />
    ));
    return (
      <section className="containerUl">
        <ul className="characterList">{characterElements}</ul>
      </section>
    );
  }
}

export default CharacterList;
