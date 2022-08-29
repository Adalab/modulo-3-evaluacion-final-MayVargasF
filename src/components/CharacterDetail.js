import NoImage from "../images/No_Image_Available.jpg";
import "../styles/components/characterDetail.scss";
import { Link } from "react-router-dom";

function CharacterDetail(props) {
  function imagePlaceholder(element) {
    return element === "" ? { NoImage } : element;
  }
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
          <p className="characterDetail_info">
            <span className="label">Nombres alternativos:</span>{" "}
            {props.character.alternate_names}
          </p>
          <p className="characterDetail_info">
            <span className="label">Estatus:</span> {props.character.alive}
          </p>
          <p className="characterDetail_info">
            <span className="label">Especie:</span> {props.character.species}
          </p>
          <p className="characterDetail_info">
            <span className="label">Género:</span> {props.character.gender}
          </p>
          <p className="characterDetail_info">
            <span className="label">Casa:</span> {props.character.house}
          </p>
          <Link to="/" className="home">
            Volver
          </Link>
        </div>
      </section>
    </>
  );
}

export default CharacterDetail;
