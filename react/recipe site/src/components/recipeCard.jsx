import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addItem,
  removeItem,
  selectIsInFavourites,
} from "../slices/favouritesSlice";
import "../styles/recipeCard.css";

const RecipeCard = ({ recipe }) => {
  const [expanded, setExpanded] = useState(false);
  const dispatch = useDispatch();

  const isInFavourites = useSelector((state) =>
    selectIsInFavourites(state, recipe.id)
  );

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  const addToFavourites = () => {
    if (!isInFavourites) {
      dispatch(addItem(recipe));
    }
  };

  return (
    <div className={`recipe-card ${expanded ? "expanded" : ""}`}>
      <Link to={`/recipes/${recipe.id}`}>
        <img src={recipe.image} alt="no image" className="image" />
        <h3 className={`recipe-name ${expanded ? "expanded" : ""}`}>
          {recipe.title}
        </h3>
      </Link>

      {expanded && (
        <div className="additional-info">
          <p className="recipe-cooking-time">
            <strong>Cooking Time:</strong> {recipe.readyInMinutes + "min"}
          </p>

          <p className="recipe-ingredients">
            <strong>Ingredients:</strong>{" "}
            {recipe.nutrition.ingredients.map((i) => i.name).join(", ")}
          </p>
        </div>
      )}

      <div className="buttons">
        <button onClick={toggleExpansion} className="toggle">
          {expanded ? "Show Less" : "Show More"}
        </button>

        <button
          className={`add-to-fav ${isInFavourites ? "added" : ""}`}
          onClick={
            isInFavourites
              ? () => dispatch(removeItem({ id: recipe.id }))
              : addToFavourites
          }
        >
          {isInFavourites ? "Added to Favourites" : "Add to Favourites"}
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
