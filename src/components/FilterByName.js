function FilterByName(props) {
  const handleChange = (ev) => {
    ev.preventDefault();
    props.handleFilterByName(ev.target.value);
  };
  return (
    <>
      <label htmlFor="searchCharacter" className="form_label">
        Busca por personaje:
      </label>
      <input
        className="form_input"
        type="searchCharacter"
        name="searchCharacter"
        id="searchCharacter"
        placeholder="Ej. Harry Potter"
        value={props.FilterByName}
        onChange={handleChange}
      />
    </>
  );
}

export default FilterByName;
