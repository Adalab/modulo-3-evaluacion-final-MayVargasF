function FilterByName(props) {
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
      />
    </>
  );
}

export default FilterByName;
