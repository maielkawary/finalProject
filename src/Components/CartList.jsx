import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { fetchCart, updateCartItemQuantity } from "../redux/slices/cartSlice";
import axios from "axios";
import useAuth from "../redux/hooks/useAuth";
import "./productDetails.css";

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

const CartList = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.items);
  const status = useSelector((state) => state.cart.status);
  const error = useSelector((state) => state.cart.error);
  const [productsDetails, setProductsDetails] = useState([]);
  const isAuthenticated = useAuth();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCart(userId));
      console.log("Fetching cart for user:", userId);
    }
  }, [status, dispatch, userId]);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const productDetailsPromises = cart.map((item) =>
          axios.get(`http://localhost:3001/products/${Number(item.productId)}`)
        );
        const productsResponses = await Promise.all(productDetailsPromises);
        const productsData = productsResponses.map((response) => response.data);
        setProductsDetails(productsData);
        console.log("Fetched product details:", productsData);
      } catch (error) {
        console.error("Failed to fetch product details:", error);
      }
    };

    if (cart.length > 0) {
      fetchProductDetails();
      console.log("Cart data:", cart);
    }
  }, [cart]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  const updateQuantity = (productId, newQuantity) => {
    dispatch(updateCartItemQuantity({ userId, productId, quantity: newQuantity }));
  };

  const handleBuyNow = (productId, quantity) => {
    // if (isAuthenticated) {
    if (true) {
      navigate(`/checkout/${userId}/${productId}/${quantity}`);
    } else {
      alert("Please log in to proceed with the purchase.");
    }
  };

  return (
    <div id="product-page-body" className="container-fluid d-flex flex-column mb-5" style={{ marginTop: "80px" }}>
      <div id="product-top-container" className="container-fluid justify-content-center mb-3 row">
        {productsDetails.length > 0 ? (
          productsDetails.map((product) => {
            const cartItem = cart.find((item) => Number(item.productId) === Number(product.id));
            if (!cartItem || !product) {
              return null;
            }
            return (
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
                    <h1 className="card-title fontStyle">{product.title}</h1>
                    <p className="card-text text-dark fs-4">{product.description}</p>
                    <p className="card-text paraStyle fs-4" id="product-rate">
                      {renderStars(product.rating.rate)}
                    </p>
                    <p className="card-text paraStyle fs-4">Price: ${product.price}</p>
                    <div className="d-flex align-items-center mb-3" style={{ width: "25%" }}>
                      <button
                        className="btn btn-danger counter-btn"
                        onClick={() => {
                          const newQuantity = Math.max(cartItem.quantity - 1, 1);
                          updateQuantity(cartItem.productId, newQuantity);
                        }}
                      >
                        -
                      </button>
                      <input
                        className="form-control text-center mx-2"
                        type="text"
                        style={{ width: "50px" }}
                        value={cartItem.quantity}
                        readOnly
                      />
                      <button
                        className="btn btn-success counter-btn"
                        onClick={() => {
                          const newQuantity = cartItem.quantity + 1;
                          updateQuantity(cartItem.productId, newQuantity);
                        }}
                      >
                        +
                      </button>
                    </div>
                    <p className="card-text paraStyle fs-4 text-danger">
                      Total: ${(cartItem.quantity * product.price).toFixed(2)}
                    </p>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleBuyNow(cartItem.productId, cartItem.quantity)}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div>No products found in the cart.</div>
        )}
      </div>
    </div>
  );
};

export default CartList;
