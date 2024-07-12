import React, { useState, useEffect, createContext } from "react";
import "./App.css";
import ToggleButton from "./components/ToggleButton";
import CarList from "./components/CarList";
import Filter from "./components/Filter";

export const AppDataContext = createContext();

function App() {
  const [inputVal, setInputVal] = useState("");
  const [filteredPlanets, setFilteredPlanets] = useState([]);

  useEffect(() => {
    if (inputVal === "") {
      setFilteredPlanets(appData.planets);
    } else {
      setFilteredPlanets((prevPlanets) =>
        prevPlanets.filter((planet) =>
          planet.toLowerCase().includes(inputVal.toLowerCase())
        )
      );
    }
  }, [inputVal]);

  const appData = {
    planets: [
      "Mercury",
      "Venus",
      "Earth",
      "Mars",
      "Jupiter",
      "Saturn",
      "Uranus",
      "Neptune",
    ],
    inputValue: inputVal,
    handleInputChange: (e) => {
      setInputVal(e.target.value);
    },
  };

  const cars = [
    { id: 1, name: "Toyota Camry" },
    { id: 2, name: "Honda Civic" },
    { id: 3, name: "Ford Mustang" },
    { id: 4, name: "Chevrolet Corvette" },
    { id: 5, name: "BMW M3" },
    { id: 6, name: "Audi A4" },
    { id: 7, name: "Mercedes-Benz E-Class" },
    { id: 8, name: "Tesla Model S" },
    { id: 9, name: "Subaru Outback" },
    { id: 10, name: "Volkswagen Golf" },
  ];

  return (
    <>
      <ToggleButton>
        <div id="cars" className="filter-box">
          <h1>Cars</h1>
          <CarList cars={cars} />
        </div>

        <div id="planets" className="filter-box">
          <h1>Planets</h1>
          <AppDataContext.Provider value={[appData, filteredPlanets]}>
            <Filter />
          </AppDataContext.Provider>
        </div>
      </ToggleButton>
    </>
  );
}

export default App;
