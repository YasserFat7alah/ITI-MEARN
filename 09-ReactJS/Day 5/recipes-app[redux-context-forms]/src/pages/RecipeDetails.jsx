import { useEffect, useState } from "react";
import { useLocation, useParams, useSearchParams } from "react-router";
import axiosInstance from "../apis/config";

export default function RecipeDetails() {
  const [recipe, setRecipe] = useState();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const params = useParams();

  console.log(location);
  console.log(searchParams.get("category"));
  console.log("params", params);

  useEffect(() => {
    axiosInstance
      .get(`/recipes/${params.id}`)
      .then((res) => setRecipe(res.data))
      .catch((err) => console.log(err));

      // axios
      // .post(`https://dummyjson.com/recipes/create' , payload)
      // .then((res) => setRecipe(res.data))
      // .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>{recipe?.name}</h2>
    </div>
  );
}
