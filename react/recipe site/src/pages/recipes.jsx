import React, { useEffect, useState } from "react";
import "../styles/recipes.css";
import RecipeCard from "../components/recipeCard";

const Recipes = () => {
  const [searchQuery, setSearchQuery] = useState(localStorage.getItem("searchQuery"));
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const storedRecipes = localStorage.getItem("currentRecipes");
    if (storedRecipes) {
      setRecipes(JSON.parse(storedRecipes));
    } else {
      handleSearch();
    }
  }, []);

  const handleSearch = async () => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=70aa03b9936e4441951ef22c9aaad5a9&number=21&query=${searchQuery}&addRecipeInformation=true&addRecipeNutrition=true`
    );
    const data = await response.json();
    const fetchedRecipes = data.results;
    console.log("fetching data from api");
    console.log("data", fetchedRecipes)
    localStorage.setItem("currentRecipes", JSON.stringify(fetchedRecipes));
    localStorage.setItem("searchQuery", searchQuery)
    setRecipes(fetchedRecipes);
  };

  return (
    <div className="container">
      <h2 className="title">Search Recipes</h2>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Enter a dish name"
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">
        Search
      </button>

      <ul className="recipes-list">
        {recipes.map((recipe) => (
          <li key={recipe.id} className="recipe-item">
            <RecipeCard recipe={recipe}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recipes;
