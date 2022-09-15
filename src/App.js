
import './App.css';
import React, { useState , useEffect } from "react";
import data from "./data/planets-ui";

import CardPanel from "./components/CardPanel";
import MultipleSelect from './components/MultipleSelect';

const planetsData = data.results;
let climateData = [], terrainData = [];

const createDataArray = () => { //put terrain and climate data into sorted arrays and filter out duplicates
  let currId = 1;

  for (const key in planetsData) {
      if (planetsData.hasOwnProperty(key)) {
        planetsData[key].id = currId; //add an id field to planets
        currId++;

        populateArray(terrainData, key, "terrain");
        populateArray(climateData, key, "climate");
    }
  }

  function populateArray(iArr, iKey, field) {
    let dataItem = planetsData[iKey][field];
    let arr = dataItem.split(',');
    
    for (const item of arr) {
      let currentItem = item.trim();
      if (!iArr.includes(currentItem)) {
        iArr.push(currentItem);
      }
    }
    iArr.sort();
  }
}

createDataArray();

function App() {

  const [nameFilter, setNameFilter] = useState("");
  const [climateFilter, setClimateFilter] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [theme, setTheme] = useState('light');

  const [terrains, setTerrains] = useState([])

  const updateNameFilter = elem => {
    setNameFilter(elem.target.value);
  };

  const updateClimateFilter = elem => {
    setClimateFilter(elem.target.value);
  };

  const updateSortBy = elem => {
    setSortBy(elem.target.value);
  };

  const swapTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  useEffect(() => {
    document.getElementById('AppContainer').className = "Container-" + theme;
  }, [theme]);

  const toggleOption = ({ iOption }) => {
      setTerrains(selectedOpts => {
          const newArray = [...selectedOpts]

          if (newArray.includes(iOption)) {
              return newArray.filter(item => item !== iOption)
          } else {
              newArray.push(iOption)
              return newArray;
          }
      })
  }

  return (
    <div className="App">
      <div id="AppContainer">
        <div className="OptionsHeader">

          <button className="themeButton" onClick={swapTheme}>Swap Theme</button>

          <label htmlFor="sortBy">Sort By: </label>
          <select name="sortBy" id="sortBy" className="custom-select" onChange={updateSortBy}>
            <option value = "id">Default</option>
            <option value = "name">Name</option>
            <option value = "population">Population</option>
            <option value = "residents">Residents</option>
          </select>

          <input id="nameFilter" className="textFilter" placeholder="Filter By Name" type="text" onChange={(event) =>updateNameFilter(event)} />

          <select className="custom-select" id="climateFilter" onChange={updateClimateFilter}>
          <option id="defaultOption" value = "">Select Climate</option>
            {climateData.map(val => <option key={val} value={val}>{val}</option>)}
          </select>

          <MultipleSelect
            heading = {"Select Terrains"}
            options = {terrainData}
            selected = {terrains}
            toggleOption = {toggleOption}
          />

        </div>

        <CardPanel 
          inputData = {planetsData}
          nameFilter = {nameFilter.toLowerCase()}
          climateFilter = {climateFilter.toLowerCase()}
          terrainFilter = {terrains}
          sortKey = {sortBy}
          theme = {theme}
        />
      </div>
    </div>
  );

}

export default App;
