import "../styles/components/form.scss";
import FilterByHouse from "./FilterByHouse";
import FilterByName from "./FilterByName";

function Filters(props) {
  const handleReset = (ev) => {
    ev.preventDefault();
    props.SetFilterByHouse("Gryffindor");
    props.SetFilterByName("");
  };
  return (
    <form className="form">
      <FilterByName
        filterByName={props.filterByName}
        handleFilterByName={props.handleFilterByName}
      />
      <FilterByHouse
        filterByHouse={props.filterByHouse}
        handleFilterByHouse={props.handleFilterByHouse}
      />
      <button className="form_reset" onClick={handleReset}>
        Reset
      </button>
    </form>
  );
}

export default Filters;
