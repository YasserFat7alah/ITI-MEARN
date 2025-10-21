import { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import axiosInstance from "../apis/config";

const RecipesList = () => {
  const [recipesData, setRecipesData] = useState();

  // const getRecipes = async () => {
  //   try {
  //     const response = await axios.get();
  //   } catch {

  //   }
  // }

  useEffect(() => {
    axiosInstance
      .get("/recipes" , {
        headers: {
          'Accept-Language' : 'ar'
        },
        params: {
          limit : 10,
          sortBy: 'name'
        }
      })
      .then((res) => setRecipesData(res.data.recipes))
      .catch((err) => console.log(err));
  }, []);

  const handleDeleteRecipe = (id) => {
    console.log(id);
    const filteredList = recipesData.filter((recipe) => recipe.id !== id);
    // recipesData = filteredList;XXXX
    setRecipesData(filteredList);
  };

  return (
    <>
      <h2>Recipes List</h2>
      <hr />
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {recipesData?.map((recipeItem) => {
          return (
            <div className="col" key={recipeItem.id}>
              <RecipeCard
                recipe={recipeItem}
                handleDelete={(id) => handleDeleteRecipe(id)}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RecipesList;
