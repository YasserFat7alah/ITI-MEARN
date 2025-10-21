import { useSelector } from "react-redux";
import CartRow from "../components/cart/CartRow";

const Cart = () => {
  const { count, products, total } = useSelector((state) => state.cart);

  if (count === 0) {
    return (
      <div className="container my-5 text-center">
        <h3>Your cart is empty</h3>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h3>
        Shopping Cart ({count} product{count > 1 && "s"})
      </h3>
      <table className="table align-middle mt-3">
        <thead>
          <tr>
            <th style={{ width: "80px" }}></th>
            <th>Product</th>
            <th style={{ width: "200px" }}>Quantity</th>
            <th style={{ width: "80px" }}>Remove</th>
            <th style={{ width: "120px" }}>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <CartRow product={product} />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <strong>Total:</strong>
            </td>
            <td className="text-success">
              <strong>{total.toFixed(2)}$</strong>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Cart;
