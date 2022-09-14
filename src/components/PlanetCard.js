import "./PlanetCard.scss";

const PlanetCard = (props) => {

    return (
      <div id="cardContainer" className={"planet planet-" + props.theme}>
          <span className="dataLine">
              {"Name: " + props.name}
          </span>
          <span className="dataLine">
            {"Terrain: " + props.terrain}
          </span>
          <span className="dataLine">
            {"Climate: " + props.climate}
          </span>
          <span className="dataLine">
            {"Population: " + props.population}
          </span>
          <span className="dataLine">
            {"Residents: " + props.residents.length}
          </span>
      </div>
    );
  }

  export default PlanetCard;