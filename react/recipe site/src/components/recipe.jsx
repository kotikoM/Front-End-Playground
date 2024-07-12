import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/recipe.css";

const Recipe = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    fetchRecipe();
  }, [recipeId]);

  const fetchRecipe = async () => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=70aa03b9936e4441951ef22c9aaad5a9&includeNutrition=false`
    );
    const recipeData = await response.json();
    console.log("fetching recipe from api", recipeData);
    localStorage.setItem(`recipe`, JSON.stringify(recipeData));
    setRecipe(recipeData);
  };

  console.log();

  return (
    <div className="recipe">
      <img src={recipe.image} alt="no image" className="image" />

      <div className="description">
        <h2 className="title">{recipe.title}</h2>
        <p
          className="summary"
          dangerouslySetInnerHTML={{ __html: recipe.summary }}
        ></p>
      </div>

      <div className="ingredients">
        <h2 className="ingredients-title">Ingredients</h2>
        <ul className="ingredients-list">
          {recipe.extendedIngredients &&
            recipe.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id} className="ingredient">
                {ingredient.original}
              </li>
            ))}
        </ul>
      </div>

      <div className="instructions">
        <h2 className="instructions-title">Instructions</h2>
        <ul className="instructions-list">
          {recipe.analyzedInstructions &&
            recipe.analyzedInstructions[0]?.steps?.map((instruction) => (
              <li key={instruction.number}>{instruction.step}</li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Recipe;
