function FilterByHouse(props) {
  const handleChange = (ev) => {
    props.handleFilterByHouse(ev.target.value);
  };
  return (
    <>
      <label htmlFor="searchHouse" className="form_label">
        Selecciona la casa:
      </label>
      <select
        name="searchHouse"
        id="searchHouse"
        className="form_input"
        value={props.filterByHouse}
        onChange={handleChange}
      >
        <option value="all">Todos</option>
        <option value="Gryffindor">Gryffindor</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Ravenclaw">Ravenclaw</option>
      </select>
    </>
  );
}

export default FilterByHouse;

//Puedo hacer un map para pintar todos los option por casas, hacer primero eso.
