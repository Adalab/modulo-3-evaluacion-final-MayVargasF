import picture from "../images/harry.jpg";

function CharacterCard(props) {
  return (
    <li className="characterList_item">
      <img
        className="characterList_item-picture"
        src={picture}
        alt="Character"
      ></img>
      <h1 className="characterList_item-name">Nombre personaje</h1>
      <p className="characterList_item-specie">Especie</p>
    </li>
  );
}

export default CharacterCard;
