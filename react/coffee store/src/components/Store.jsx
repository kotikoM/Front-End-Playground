import React, { useState } from "react";
import "./Store.css";

const Store = ({ items }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSort, setSelectedSort] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  let filteredItems = selectedCategory
    ? items.filter((item) => item.description.includes(selectedCategory))
    : items;

  if (selectedSort === "ascending") {
    filteredItems = filteredItems.sort((a, b) => a.price - b.price);
  } else if (selectedSort === "descending") {
    filteredItems = filteredItems.sort((a, b) => b.price - a.price);
  }

  if (searchQuery) {
    filteredItems = filteredItems.filter((item) =>
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  return (
    <div className="store">
      <div className="navbar">
        <div className="product-group">
          <h1>Product group</h1>
          <select onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="" selected>
              Select
            </option>
            <option value="tea">tea</option>
            <option value="coffee">coffee</option>
          </select>
        </div>
        <div className="sort-by-price">
          <h1>Sort by price</h1>
          <select onChange={(e) => setSelectedSort(e.target.value)}>
            <option value="" selected>
              Select
            </option>
            <option value="ascending">Price: Low to High</option>
            <option value="descending">Price: High to Low</option>
          </select>
        </div>
        <div className="search">
          <h1>Search</h1>
          <input type="text" placeholder="Search..." onChange={e => setSearchQuery(e.target.value)}/>
        </div>
      </div>

      <ul className="products">
        {filteredItems.map((item, index) => (
          <li key={index} className="product">
            <img src={item.img} alt="" />
            <p>{item.description}</p>
            <p>{item.price}</p>
            <button>Add to cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Store;
