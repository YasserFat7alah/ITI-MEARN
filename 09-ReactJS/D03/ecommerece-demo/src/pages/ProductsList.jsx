import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import { useSearchParams } from "react-router";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const productsPerPage = 8;

  const currentPage = parseInt(searchParams.get("page")) || 1;

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?limit=100")
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.error(err));
  }, []);

  const totalPages = Math.ceil(products.length / productsPerPage);

  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = products.slice(indexOfFirst, indexOfLast);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setSearchParams({ page });
    }
  };

  return (
    <div className="container my-4">
      <div className="row">
        {currentProducts.map((prod) => (
          <div key={prod.id} className="col-12 col-md-6 col-lg-3 mb-4">
            <ProductCard product={prod} />
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <nav className="d-flex justify-content-center mt-4 text-dark">
        <ul className="pagination text-dark">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button
              className="page-link text-dark"
              onClick={() => goToPage(currentPage - 1)}
            >
              Previous
            </button>
          </li>

          {[...Array(totalPages)].map((_, idx) => (
            <li
              key={idx}
              className={`page-item text-dark ${currentPage === idx + 1 ? "active" : ""}`}
            >
              <button className="page-link" onClick={() => goToPage(idx + 1)}>
                {idx + 1}
              </button>
            </li>
          ))}

          <li
            className={`page-item ${
              currentPage === totalPages ? "disabled" : ""
            }`}
          >
            <button
              className="page-link text-dark"
              onClick={() => goToPage(currentPage + 1)}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ProductsList;
