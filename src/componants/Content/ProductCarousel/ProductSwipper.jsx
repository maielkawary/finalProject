// ProductSwipper.jsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductSwipper.css';

// Shuffle array function
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const ProductCarousel = () => {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  // Fetch products from API
  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:3001/products');
      const data = await response.json();
      const shuffledProducts = shuffleArray(data).slice(0, 16); // Show 16 products
      setProducts(shuffledProducts);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  const buyNow = (productId) => {
    console.log('Navigating to product details:', productId);
    navigate(`/products/details/${Number(productId)}`);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div>
          <h2 className="fontStyle ms-2 mt-5 mb-4">Shop now</h2>
          <div className="swiper-container">
            <div
              className="swiper-wrapper"
              style={{ transform: `translateX(-${currentIndex * 200}px)` }}
            >
              {products.map((product) => (
                <div className="card1" key={product.id}>
                  <img src={product.image} alt={product.title} />
                  <h5>{product.title}</h5>
                  <p className="mt-3">${product.price}</p>
                  <button className="mb-3" onClick={() => buyNow(product.id)}>
                    More details
                  </button>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
              <button
                id="prev"
                className="swiper-button"
                onClick={handlePrev}
                style={{ paddingRight: 2, paddingLeft: 2, paddingBottom: 2 }}
              >
                Previous
              </button>
              <button id="next" className="swiper-button ps-1" onClick={handleNext}>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;
