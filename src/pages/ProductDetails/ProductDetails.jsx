import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./ProductDetails.css"

const ProductDetails = () => {

    const [products, setProducts] = useState(null);
    const {id} = useParams()
  
    useEffect(() => {
      fetch('../../../data.json')
        .then(response => response.json())
        .then(data => setProducts(data))
        .catch(error => console.error('Error fetching data:', error));
    }, []);
  
    if (!products) {
      return <div>Loading...</div>;
    }

    return(
        <>
        { products.map((product) => {
            if(product.id == id){
                return(
                    <div className="product-details" key={product.id}>
                        <img src={product.image}></img>
                        <h2>{product.title}</h2>
                        <h4>{product.price}</h4>
                        <p>{product.description}</p>
                    </div>
                )

            }
        })}

        </>
    )
}

export default ProductDetails