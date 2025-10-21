import { Link, useNavigate } from "react-router";

const RecipeCard = (props) => {
  console.log(props);
  const { recipe, handleDelete } = props;
  const navigate = useNavigate();

  const redirectToDetails = (id , name) => {
    navigate(`/recipe-details/${id}`);
  };

  return (
    <div className="card h-100">
      <img src={recipe.image} className="card-img-top" alt={recipe.name} />
      <div className="card-body">
        {/* {recipe.cookTimeMinutes <= 10 ? (
                    <span className="badge text-bg-success">Easy to cook</span>
                  ) : (
                    <span className="badge text-bg-warning">Need more time</span>
                  )} */}
        {recipe.cookTimeMinutes <= 10 && (
          <span className="badge text-bg-success">Easy to cook</span>
        )}
        <Link className="card-title" to="/recipe-details">
          {recipe.name}
        </Link>
        <p className="card-text">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
      </div>
      <div className="card-footer">
        <button className="btn btn-primary" onClick={() => redirectToDetails(recipe.id , recipe.name)}>
          view
        </button>
        <button
          className="btn btn-danger mx-2"
          onClick={() => handleDelete(recipe.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
