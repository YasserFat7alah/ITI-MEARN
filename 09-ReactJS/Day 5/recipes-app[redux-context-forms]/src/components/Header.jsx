import { useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import ThemeContext from "../context/theme";

export default function Header() {
  const counter = useSelector(state => state.counter.counterVal);
  const { theme } = useContext(ThemeContext);
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <span className="navbar-brand">Recipe App</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link" to="/">
              Recipes List
            </Link>
            <Link className="nav-link" to="/add-recipe">
              Add Recipe
            </Link>
            <Link className="nav-link" to="/settings">
              Settings
            </Link>
            <Link className="nav-link" to="/counter">
              Counter : {counter}
            </Link>
            <span>Theme: {theme}</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
