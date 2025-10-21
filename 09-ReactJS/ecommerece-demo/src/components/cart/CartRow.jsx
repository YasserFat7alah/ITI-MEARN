import { useDispatch } from "react-redux";
import {
  decrementItem,
  incrementItem,
  removeFromCart,
} from "../../store/slices/cart";
import { Link } from "react-router";

const CartRow = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <tr key={product.id}>
      {/* Thumbnail */}
      <td>
        <Link
          to={`/products/${product.id}`}
          style={{ textDecoration: "none", color: "inherit" }}
          className="flex-grow-1 d-flex flex-column"
        >
          <img
            src={product.thumbnail}
            alt={product.title}
            style={{ width: "70px", height: "70px", objectFit: "cover" }}
            className="rounded"
          />
        </Link>
      </td>

      {/* Name + description */}
      <td>
        <Link
          to={`/products/${product.id}`}
          style={{ textDecoration: "none", color: "inherit" }}
          className="flex-grow-1 d-flex flex-column"
        >
          <h6 className="mb-1">{product.title}</h6>
          <small className="text-muted">
            {product.description?.slice(0, 60)}...
          </small>
        </Link>
      </td>

      {/* Quantity controls */}
      <td>
        {/* Decrease */}
        <div className="d-flex align-items-center">
          <button
            className="btn btn-sm btn-outline-dark"
            onClick={() => dispatch(decrementItem(product))}
            
          >
            -
          </button>
          {/* Quantity */}
          <span
            className="mx-2 border px-3 py-1 rounded"
            style={{ minWidth: "40px", textAlign: "center" }}
          >
            {product.quantity}
          </span>
          {/* Increase */}
          <button
            className="btn btn-sm btn-outline-dark"
            onClick={() => dispatch(incrementItem(product))}
            disabled={product.quantity >= product.stock}
          >
            +
          </button>
        </div>
      </td>

      {/* Remove */}
      <td>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => dispatch(removeFromCart(product))}
        >
          ×
        </button>
      </td>

      {/* Price */}
      <td>
        <strong>${product.price}</strong>
      </td>
    </tr>
  );
};

export default CartRow;
