import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import { fetchProducts } from "../redux/slices/productsSlice";
import "./productDetails.css";

// Render Stars
function renderStars(rating) {
  const maxStars = 5;
  let stars = [];
  for (let i = 1; i <= maxStars; i++) {
    if (i <= rating) {
      stars.push(
        <span key={i} className="full-star">★</span>
      );
    } else if (i - 0.5 <= rating) {
      stars.push(
        <span key={i} className="half-star">☆</span>
      );
    } else {
      stars.push(
        <span key={i} className="empty-star">☆</span>
      );
    }
  }
  return stars;
}

const ProductList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate for navigation
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  console.log(products);
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div id="product-page-body" className="container-fluid d-flex flex-column mb-5" style={{ marginTop: "80px" }}>
      <div id="product-top-container" className="container-fluid justify-content-center mb-3 row">
        {products.map((product) => (
          <div key={product.id} className="col-12 col-sm-12 col-md-8 align-content-top container-fluid row shadow">
            <div className="card d-flex flex-md-row mb-2 flex-column">
              <img
                className="img-fluid card-img-right order-1 mt-2 order-md-2 align-self-center"
                id="product-img"
                src={product.image}
                alt={product.title}
                style={{ width: "300px", height: "300px" }}
                loading="lazy"
              />
              <div className="card-body order-2 order-md-1">
                <h4 className="card-title fontStyle">{product.title}</h4>
                <p className="card-text text-dark fs-4">{product.description}</p>
                <p className="card-text paraStyle fs-4" id="product-rate">
                  {renderStars(product.rating.rate)}
                </p>
                <p className="card-text paraStyle fs-4">Price: ${product.price}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => navigate(`/products/details/${Number(product.id)}`)}
                >
                  Product Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
