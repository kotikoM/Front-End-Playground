import React, { useContext } from "react";
import { AppDataContext } from "../App";

const Filter = () => {
  const [{ planets, inputValue, handleInputChange }, filteredPlanet] =
    useContext(AppDataContext);

  return (
    <div className="list-box" style={{ height: `${planets.length * 30}px` }}>
      <input
        type="text"
        placeholder="Search planets"
        value={inputValue}
        onChange={handleInputChange}
      />

      <div>
        {filteredPlanet.map((planet, index) => (
          <li key={index}>{planet}</li>
        ))}
      </div>
    </div>
  );
};

export default Filter;
