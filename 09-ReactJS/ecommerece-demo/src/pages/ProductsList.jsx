import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/slices/products";
import ProductCard from "../components/ProductCard";
import { useSearchParams } from "react-router";

const ProductsList = () => {
  const dispatch = useDispatch();
  const {
    items: products,
    status,
    error,
  } = useSelector((state) => state.products);

  const [searchParams, setSearchParams] = useSearchParams();
  const productsPerPage = 8;
  const currentPage = parseInt(searchParams.get("page")) || 1;
  

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  if (status === "loading")
    return <div className="container my-5">Loading...</div>;
  if (status === "failed")
    return <div className="container my-5">Error: {error}</div>;

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

      {/* Pagination */}
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
              className={`page-item text-dark ${
                currentPage === idx + 1 ? "active" : ""
              }`}
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
