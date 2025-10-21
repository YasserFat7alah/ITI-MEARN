import { Route, Routes } from "react-router";
// import RecipesList from "../pages/RecipesList";
// import RecipeDetails from "../pages/RecipeDetails";
// import Counter from "../pages/Counter";
import AddRecipe from "../pages/AddRecipe";
import Settings from "../pages/Settings";
import NotFound from "../pages/NotFound";
import React, { Suspense } from "react";

const RecipesList = React.lazy(() => import("../pages/RecipesList"));
const RecipeDetails = React.lazy(() => import("../pages/RecipeDetails"));
const Counter = React.lazy(() => import("../pages/Counter"));

export default function RoutesList() {
  return (
    <Suspense fallback={<h3>Loading...</h3>}>
      <Routes>
        <Route path="/" element={<RecipesList />} />
        <Route path="/recipe-details/:id" element={<RecipeDetails />} />
        <Route path="/recipe-details/analytics" element={<Counter />} />
        <Route path="/add-recipe" element={<AddRecipe />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
