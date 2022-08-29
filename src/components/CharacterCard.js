import { Link } from "react-router-dom";
import NoImage from "../images/No_Image_Available.jpg";

function CharacterCard(props) {
  function imagePlaceholder(element) {
    return element === "" ? NoImage : element;
  }
  return (
    <li className="characterList_item">
      <Link to={`/character/${props.character.id}`} className="link">
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
