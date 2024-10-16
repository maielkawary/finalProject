import PropTypes from "prop-types";

const ProductQuantity = ({ product, quantity, setQuantity }) => {
  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div>
      {/* Quantity Controls */}
      <div className="d-flex align-items-center mb-3" style={{ width: "25%" }}>
        <button className="btn btn-danger counter-btn" onClick={decrementQuantity}>
          -
        </button>
        <input className="form-control text-center mx-2" style={{ width: "50px" }} type="text" value={quantity} readOnly />
        <button className="btn btn-success counter-btn" onClick={incrementQuantity}>
          +
        </button>
      </div>
      {/* Total Price */}
      <p className="card-text text-danger fs-4">Total: ${(quantity * product.price).toFixed(2)}</p>
    </div>
  );
};

// Add prop-types validation
ProductQuantity.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired, // Ensure product.id is a number
    price: PropTypes.number.isRequired,
  }).isRequired, // Ensure product is an object with required id and price
  quantity: PropTypes.number.isRequired, // Ensure quantity is a required number
  setQuantity: PropTypes.func.isRequired, // Ensure setQuantity is a required function
};

export default ProductQuantity;
