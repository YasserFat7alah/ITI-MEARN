import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import NotFound from "./NotFound";

const ProductView = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [stock, setStock] = useState(0);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setMainImage(res.data.images[0]);
        setStock(res.data.stock);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!product) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "60vh" }}
      >
        <NotFound />
      </div>
    );
  }

  return (
    <div className="container my-5">
      <div className="row g-4">
        {/* IMAGE + THUMBNAILS */}
        <div className="col-md-5">
          <img
            src={mainImage}
            alt={product.title}
            className="img-fluid rounded shadow-sm mb-3"
          />

          {/* THUMBNAILS */}
          <div className="d-flex flex-wrap gap-2">
            {product.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt=""
                style={{
                  width: "70px",
                  height: "70px",
                  objectFit: "cover",
                  cursor: "pointer",
                  border:
                    mainImage === img ? "2px solid black" : "1px solid #ccc",
                  borderRadius: "6px",
                }}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>

        {/* DETAILS */}
        <div className="col-md-7">
          <h2>{product.title}</h2>
          <p className="text-muted">{product.category}</p>

          <h4 className="text-success mb-3">${product.price}</h4>
          <p>{product.description}</p>

          <ul className="list-group mb-3">
            <li className="list-group-item">
              <strong>Brand:</strong> {product.brand}
            </li>
            <li className="list-group-item">
              <strong>Stock:</strong> {stock}
            </li>
            <li className="list-group-item">
              <strong>Rating:</strong> ⭐ {product.rating}
            </li>
            <li className="list-group-item">
              <strong>Warranty:</strong> {product.warrantyInformation}
            </li>
            <li className="list-group-item">
              <strong>Shipping:</strong> {product.shippingInformation}
            </li>
          </ul>

          <button
            className={`btn btn-dark btn-lg w-100 ${stock ? "" : "disabled"}`}
            onClick={() => {
              setStock(stock - 1);
            }}
          >
            {stock ? "Add to Cart" : "Out of Stock"}
          </button>
        </div>
      </div>

      {/* REVIEWS */}
      <div className="mt-5">
        <h4>Customer Reviews</h4>
        <ul className="list-group">
          {product.reviews.map((rev, idx) => (
            <li key={idx} className="list-group-item">
              <div className="d-flex justify-content-between">
                <strong>{rev.reviewerName}</strong>
                <span>⭐ {rev.rating}</span>
              </div>
              <p className="mb-1">{rev.comment}</p>
              <small className="text-muted">
                {new Date(rev.date).toLocaleDateString()}
              </small>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductView;
