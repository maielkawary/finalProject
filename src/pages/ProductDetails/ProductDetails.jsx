import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../../redux/slices/productsSlice";

import "./ProductDetails.css"

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

const ProductDetails = () => {
    const {id} = useParams()

    const dispatch = useDispatch();
  const product = useSelector((state) => state.products.product); // Access the single product from state
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    dispatch(fetchProductById(id));
  // alert(status);
  // if (status === "idle" || (product && product.id !== id)) { //CHECK
  //   dispatch(fetchProductById(id));
    
  //   alert(id);
  // }
}, [dispatch, id]);

    //const [products, setProducts] = useState(null);
  
    // useEffect(() => {
    //   fetch('../../../data.json')
    //     .then(response => response.json())
    //     .then(data => setProducts(data))
    //     .catch(error => console.error('Error fetching data:', error));
    // }, []);
  
    if (!product) {
      return <div>Loading...</div>;
    }
    return(
        <div className="product-details" key={product.id}>
            <img src={product.image}></img>
            <h2>{product.title}</h2>
            <h4>{product.price}</h4>
            <p>{product.description}</p>
            <p className="card-text paraStyle fs-4" id="product-rate">
            {renderStars(product.rating.rate)}
            </p>
        </div>
    )
}

export default ProductDetails