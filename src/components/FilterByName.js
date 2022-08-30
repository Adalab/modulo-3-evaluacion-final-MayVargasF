function FilterByName(props) {
  const handleChange = (ev) => {
    ev.preventDefault();
    props.handleFilterByName(ev.target.value);
  };

  const handleSubmit = (ev) => {
    if (ev.code === "Enter" || ev.code === "NumpadEnter") {
      ev.preventDefault();
    }
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
        value={props.filterByName}
        onChange={handleChange}
        onKeyPress={handleSubmit}
      />
    </>
  );
}

export default FilterByName;
