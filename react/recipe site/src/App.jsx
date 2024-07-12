import "./App.css";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import React, { Suspense } from "react";
import HomePage from "./pages/homePage";
import Recipes from "./pages/recipes";
import Favourites from "./pages/favourites";
import Recipe from "./components/recipe";
function App() {
  return (
    <>
      <Router>
        <nav>
          <h1>Recipe Cooking</h1>

          <ul>
          <li>
              <NavLink to="/" className={({ isActive }) => isActive ? 'active' : undefined}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/recipes" className={({ isActive }) => isActive ? 'active' : undefined}>Recipes</NavLink>
            </li>
            <li>
              <NavLink to="/favourites" className={({ isActive }) => isActive ? 'active' : undefined}>Favourites</NavLink>
            </li>
          </ul>
        </nav>

        <Suspense fallback={<>Loading...</>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/recipes/:recipeId" element={<Recipe />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
