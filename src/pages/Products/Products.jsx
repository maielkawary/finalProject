import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import './Products.css';

const Products = () => {
    const {categoryName} = useParams()
    const [products, setProducts] = useState(null);
  
    useEffect(() => {
      fetch('../../../data.json')
        .then(response => response.json())
        .then(data => setProducts(data))
        .catch(error => console.error('Error fetching data:', error));
    }, []);
  
    if (!products) {
      return <div>Loading...</div>;
    }

    
    console.log(categoryName)
    return (
      <div className="category-container">
        {products.map((product) => {
        if(product.category == categoryName){
            return(
                <Link to={`productDetails/${product.id}`} >
                <div className="product" key={product.id}>
                    <img src={product.image}></img>
                    <h3>{product.title}</h3>
                    <h4>{product.price}</h4>

                </div>
                </Link>
            )
        }
        })}
        
        
      </div>
    );
  };

export default Products