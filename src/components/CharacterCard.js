function CharacterCard(props) {
  return (
    <li key={props.i} className="characterList_item">
      <img
        className="characterList_item-picture"
        src={props.character.image}
        alt={props.character.name}
      ></img>
      <h1 className="characterList_item-name">{props.character.name}</h1>
      <p className="characterList_item-specie">{props.character.species}</p>
    </li>
  );
}

export default CharacterCard;
