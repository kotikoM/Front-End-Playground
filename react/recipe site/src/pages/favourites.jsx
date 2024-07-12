import React from "react";
import { useSelector, useDispatch } from "react-redux";
import RecipeCard from "../components/recipeCard";
import "../styles/favourites.css";

const favourites = () => {
  const favouriteRecipes = useSelector((s) => s.favourites.items);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h2>Favourites</h2>

      {favouriteRecipes.length > 0 ? (
        <ul className="recipes-list">
          {favouriteRecipes.map((recipe) => (
            <li key={recipe.id} className="recipe-item">
              <RecipeCard recipe={recipe} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No favourites added yet.</p>
      )}
    </div>
  );
};

export default favourites;
