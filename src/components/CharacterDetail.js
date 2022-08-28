function CharacterDetail(props) {
  function imagePlaceholder(element) {
    return element === ""
      ? "https://via.placeholder.com/210x295/ffffff/666666/?text=NotFound"
      : element;
  }
  return (
    <section className="characterDetail">
      <img
        className="characterDetail_picture"
        src={imagePlaceholder(props.character.image)}
        alt={props.character.name}
      ></img>
      <h1 className="characterDetail_info">
        `Estatus:${props.character.name}`
      </h1>
      <p className="characterDetail_info">{props.character.species}</p>
      <p className="characterDetail_info">{props.character.species}</p>
      <p className="characterDetail_info">{props.character.species}</p>
      <p className="characterDetail_info">{props.character.species}</p>
    </section>
  );
}

export default CharacterDetail;
