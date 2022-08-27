import "../styles/components/form.scss";
import FilterByHouse from "./FilterByHouse";
import FilterByName from "./FilterByName";

function Filters(props) {
  return (
    <form className="form">
      <FilterByName />
      <FilterByHouse
        filterByHouse={props.filterByHouse}
        handleFilterByHouse={props.handleFilterByHouse}
      />
    </form>
  );
}

export default Filters;
