
import "./CardPanel.css";
import getSortedData from "../logic/sort"
import checkIfIncludes from "../logic/checkIfIncludes";
import PlanetCard from "./PlanetCard";

const CardPanel = (props) => {

  let sortedData = getSortedData(props.sortKey, props.inputData);

  return (
      <div className="cardContainer">
      {sortedData.filter(planet => (
        planet.name.toLowerCase().includes(props.nameFilter) &&
        checkIfIncludes(planet.climate.toLowerCase(), [props.climateFilter]) &&
        checkIfIncludes(planet.terrain.toLowerCase(), props.terrainFilter)

      )).map((planet) => (
        <PlanetCard key={planet.name}
          name={planet.name}
          terrain={planet.terrain}
          climate={planet.climate}
          population={planet.population}
          residents={planet.residents}
          theme={props.theme}
        />
      ))}
    </div>
  );
}

export default CardPanel;