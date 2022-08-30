function FilterByName(props) {
  const handleChange = (ev) => {
    ev.preventDefault();
    props.handleFilterByName(ev.target.value);
  };
  return (
    <>
      <label htmlFor="searchCharacter" className="form_label">
        Search by character:
      </label>
      <input
        className="form_input"
        type="searchCharacter"
        name="searchCharacter"
        id="searchCharacter"
        placeholder="e.g., Harry Potter"
        value={props.FilterByName}
        onChange={handleChange}
      />
    </>
  );
}

export default FilterByName;
