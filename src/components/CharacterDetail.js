import NoImage from "../images/No_Image_Available.jpg";
import "../styles/components/characterDetail.scss";
import { Link } from "react-router-dom";

function CharacterDetail(props) {
  function imagePlaceholder(element) {
    return element === "" ? NoImage : element;
  }

  const alive = (info) => {
    if (info) {
      return (
        <p className="characterDetail_info">
          <span className="label">Status</span>: alive
        </p>
      );
    } else {
      return (
        <p className="characterDetail_info">
          <span className="label">Status</span>: dead
        </p>
      );
    }
  };

  const alternateNames = (info) => {
    if (info.length !== 0) {
      return (
        <p className="characterDetail_info">
          <span className="label">Alternate names</span>:{" "}
          {props.character.alternate_names}
        </p>
      );
    }
  };
  const house = (info) => {
    if (info.length !== 0) {
      return (
        <p className="characterDetail_info">
          <span className="label">House</span>: {props.character.house}
        </p>
      );
    }
  };

  return (
    <>
      <section className="characterDetail">
        <img
          className="characterDetail_picture"
          src={imagePlaceholder(props.character.image)}
          alt={props.character.name}
        ></img>
        <div className="characterDetail_wrapper">
          <h1 className="characterDetail_wrapper-name">
            {props.character.name}
          </h1>
          {alternateNames(props.character.alternate_names)}
          {alive(props.character.alive)}
          <p className="characterDetail_info">
            <span className="label">Species</span>: {props.character.species}
          </p>
          <p className="characterDetail_info">
            <span className="label">Gender</span>: {props.character.gender}
          </p>
          {house(props.character.house)}
          <Link to="/" className="home">
            Back
          </Link>
        </div>
      </section>
    </>
  );
}

export default CharacterDetail;
