import React, { useState, useMemo } from "react";

const CarList = ({ cars }) => {
  const [searchInput, setSearchInput] = useState("");

  const filteredCars = useMemo(() => {
    if (!searchInput) {
      return cars;
    } else {
      return cars.filter((car) =>
        car.name.toLowerCase().includes(searchInput.toLowerCase())
      );
    }
  }, [cars, searchInput]);

  return (
    <div className="list-box" style={{height: `${cars.length * 30}px` }}>
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Search cars"
      />
      <ul>
        {filteredCars.map((car) => (
          <li key={car.id}>{car.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CarList;
