import { Link } from "react-router-dom";

function CharacterCard(props) {
  function imagePlaceholder(element) {
    return element === ""
      ? "https://via.placeholder.com/210x295/ffffff/666666/?text=NotFound"
      : element;
  }
  return (
    <li className="characterList_item">
      <Link to={`/character/${props.character.id}`}>
        <img
          className="characterList_item-picture"
          src={imagePlaceholder(props.character.image)}
          alt={props.character.name}
        ></img>
        <h1 className="characterList_item-name">{props.character.name}</h1>
        <p className="characterList_item-specie">{props.character.species}</p>
      </Link>
    </li>
  );
}

export default CharacterCard;
