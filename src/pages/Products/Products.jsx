import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/slices/productsSlice";
import './Products.css';


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

const Products = () => {
  const dispatch = useDispatch();
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

    const {categoryName} = useParams()
    //const [products, setProducts] = useState(null);
  
    // useEffect(() => {
    //   fetch('../../../data.json')
    //     .then(response => response.json())
    //     .then(data => setProducts(data))
    //     .catch(error => console.error('Error fetching data:', error));
    // }, []);
  
    // if (!products) {
    //   return <div>Loading...</div>;
    // }

    
    console.log(categoryName)
    return (
      <div className="page-container">
        <div className="category-container">
          {products.map((product) => {
          if(product.category == categoryName){
              return(
                  <Link to={`productDetails/${product.id}`} className="card-link">
                  <div className="product" key={product.id}>
                      <img src={product.image}></img>
                      <div className="product-card-info">
                        <h3>{product.title}</h3>
                        <p className="card-text paraStyle fs-4" id="product-rate">
                          {renderStars(product.rating.rate)}
                        </p>
                        <h4>{product.price}</h4>
                      </div>
                  </div>
                  </Link>
              )
          }
          })}
          
          
        </div>
      </div>
    );
  };

export default Products