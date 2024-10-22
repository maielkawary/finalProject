import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../redux/slices/productsSlice";
import useAuth from "../redux/hooks/useAuth";
import { addToCart } from "../redux/slices/cartSlice";
import ProductQuantity from "./ProductQuantity";
import "./productDetails.css";
import ProductCarousel from "../componants/Content/ProductCarousel/ProductSwipper";

// Render Stars
function renderStars(rating) {
  const maxStars = 5;
  let stars = [];
  for (let i = 1; i <= maxStars; i++) {
    if (i <= rating) {
      stars.push(<span key={i} className="full-star">★</span>); // Full star
    } else if (i - 0.5 <= rating) {
      stars.push(<span key={i} className="half-star">☆</span>); // Half star
    } else {
      stars.push(<span key={i} className="empty-star">☆</span>); // Empty star
    }
  }
  return stars;
}

const ProductDetailsPage = () => {
  const { id } = useParams(); // Get product ID from URL
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.product); // Access the single product from state
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);
  const isAuthenticated = useAuth();
  const userId = 2; // Replace with the actual user ID from the authentication state
  const navigate = useNavigate();

  // Handle quantity state from ProductQuantity component
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
      dispatch(fetchProductById(id));
    // alert(status);
    // if (status === "idle" || (product && product.id !== id)) { //CHECK
    //   dispatch(fetchProductById(id));
      
    //   alert(id);
    // }
  }, [id]);

  const handleAddToCart = () => {
    // if (!isAuthenticated) {
    if (!true) {
      navigate("/login"); // Redirect to login page if not authenticated
    } else {
      const cartItem = {
        userId: userId,
        product: {
          productId: Number(product.id), // Ensure productId is a number
          quantity: quantity, // Pass the selected quantity
        },
      };

      dispatch(addToCart(cartItem))
        .unwrap()
        .then(() => {
          // alert("Product added to cart successfully!");
          navigate(`/cart/${userId}`);
        })
        .catch((error) => {
          console.error("Failed to add product to cart:", error);
        });
    }
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div id="product-page-body" className="container-fluid d-flex flex-column mb-5" style={{ marginTop: "80px" }}>
      <div id="product-top-container" className="container-fluid justify-content-center mb-3 row">
        <div key={product.id} className="col-12 col-sm-12 col-md-8 align-content-top container-fluid row shadow">
        <div className="card d-flex flex-column mb-2">
  <div className="card-body">
    <h4 className="card-title fontStyle">{product.title}</h4>
  </div>
  <img
    className="img-fluid"
    id="product-img"
    src={product.image}
    alt={product.title}
    style={{ width: "100%", height: "auto" }}
    loading="lazy"
  />
  <div className="card-body">
    <p className="card-text text-dark fs-4">{product.description}</p>
    <p className="card-text paraStyle fs-4" id="product-rate">
      {renderStars(product.rating.rate)}
    </p>
    <p className="card-text paraStyle fs-4">Price: ${product.price}</p>
    {product && (
      <ProductQuantity product={product} quantity={quantity} setQuantity={setQuantity} />
    )}
  </div>
</div>

          <div>
            <button className="btn btn-add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      </div>
      <ProductCarousel />
    </div>
  );
};

export default ProductDetailsPage;
