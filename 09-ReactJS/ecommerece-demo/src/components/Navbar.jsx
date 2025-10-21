import { Link } from "react-router";
import { useSelector } from "react-redux";

import LanguageContext from "../context/language";
import { useContext } from "react";

const Navbar = () => {
  const count = useSelector((state) => state.cart.count);
  const { lang, setLang } = useContext(LanguageContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark  ">
      <div className="container d-flex align-items-center">
        <Link className="navbar-brand " to="/">
          Products App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Products List
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                Cart{" "}
                {count > 0 && (
                  <span className="badge bg-danger ms-1">{count}</span>
                )}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/contact-us"
              >
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/register-native"
              >
                Register (native)
              </Link>
            </li>
            {/* Language Dropdown */}
            <li className="nav-item dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                id="langDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {lang.toUpperCase()}
              </button>
              <ul className="dropdown-menu ms-5" aria-labelledby="langDropdown">
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => setLang("en")}
                  >
                    English
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => setLang("ar")}
                  >
                    العربية
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
