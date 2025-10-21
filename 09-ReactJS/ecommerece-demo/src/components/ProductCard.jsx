import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/slices/cart";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const prodInCart = cart.products.find((prod) => product.id == prod.id);

  return (
    <div
      className="card h-100 shadow-sm border-0 d-flex flex-column bg-white"
      style={{ transition: "transform 0.2s" }}
    >
      <Link
        to={`/products/${product.id}`}
        style={{ textDecoration: "none", color: "inherit" }}
        className="flex-grow-1 d-flex flex-column"
      >
        {/* IMAGE */}
        <img
          src={product?.thumbnail || "https://via.placeholder.com/300x200"}
          className="card-img-top rounded-top"
          alt={product?.title}
        />

        {/* STOCK */}
        <span
          className={`badge rounded-pill position-absolute 
            ${
              product?.availabilityStatus == "In Stock"
                ? "bg-success"
                : product?.availabilityStatus == "Low Stock"
                ? "bg-warning"
                : "bg-danger"
            }`}
          style={{ top: "10px", left: "10px" }}
        >
          {product?.availabilityStatus}
        </span>

        <div className="card-body d-flex flex-column flex-grow-1">
          {/* Price */}
          <h6 className="text-success fw-bold mb-2 text-end">
            {product?.price ? product.price + "$" : "0$"}
          </h6>

          {/* Title */}
          <h5 className="card-title text-dark mb-2">
            {product?.title || "Dummy title"}
          </h5>

          {/* Description */}
          <p className="card-text text-muted" style={{ fontSize: "0.9rem" }}>
            {product?.description
              ? product.description.slice(0, 60) + "..."
              : "Dummy description"}
          </p>
          <div className=" col col-12 mt-auto">
            <span className="badge bg-light text-dark border">
              {product.category}
            </span>
          </div>
        </div>
      </Link>

      {/* Actions */}
      <div className="card-footer bg-transparent border-0 mt-auto">
        <button
          className="btn btn-dark w-100"
          onClick={() => {
            dispatch(addToCart(product));
          }}
          disabled={prodInCart?.quantity >= product.stock}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
