function FilterByHouse(props) {
  const handleChange = (ev) => {
    props.handleFilterByHouse(ev.target.value);
  };
  return (
    <>
      <label htmlFor="searchHouse" className="form_label">
        Select the house:
      </label>
      <select
        name="searchHouse"
        id="searchHouse"
        className="form_input"
        value={props.filterByHouse}
        onChange={handleChange}
      >
        <option value="all">All</option>
        <option value="Gryffindor">Gryffindor</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Ravenclaw">Ravenclaw</option>
      </select>
    </>
  );
}

export default FilterByHouse;
