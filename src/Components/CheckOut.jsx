import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./checkout.css";

const CheckOut = () => {
  const { userId, productId, quantity } = useParams();
  const navigate = useNavigate();
  const [productDetails, setProductDetails] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    paymentMethod: "creditCard",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3001/products/${productId}`);
        const data = await response.json();
        setProductDetails(data);
        setTotalPrice(data.price * quantity);
      } catch (error) {
        console.error("Failed to fetch product details:", error);
      }
    };

    fetchProductDetails();
  }, [productId, quantity]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields and process payment (e.g., call to a payment API)
    // On success, navigate to the confirmation page
    navigate(`/confirmation`, { state: { userId, productId, quantity, totalPrice, form, productDetails } });
  };

  return (
    <div className="container checkout-container">
      <h2 className="text-center checkout-header mt-3 fontStyle">Checkout</h2>

      <h5>Order Summary</h5>
      <hr />
      <div className="row mb-3">
        <div className="col-3">
          <img src={productDetails.image} alt="Product" className="img-fluid product-image" id="product-image" />
        </div>
        <div className="col-6">
          <p><strong id="product-name">{productDetails.title}</strong></p>
          <p className="para1">Quantity: <span id="product-quantity">{quantity}</span></p>
          <p className="para1">Price: $<span id="product-price">{productDetails.price}</span></p>
        </div>
        <div className="col-3 text-end">
          <p className="total-price"><span id="total-price">${totalPrice.toFixed(2)}</span></p>
        </div>
      </div>

      <h5>Shipping Information</h5>
      <hr />
      <form id="checkoutForm" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">Full Name</label>
          <input type="text" className="form-control" id="fullName" placeholder="Enter your full name" value={form.fullName} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" placeholder="Enter your email" value={form.email} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input type="text" className="form-control" id="address" placeholder="Enter your address" value={form.address} onChange={handleChange} />
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="city" className="form-label">City</label>
            <input type="text" className="form-control" id="city" placeholder="Enter your city" value={form.city} onChange={handleChange} />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="postalCode" className="form-label">Postal Code</label>
            <input type="text" className="form-control" id="postalCode" placeholder="Enter your postal code" value={form.postalCode} onChange={handleChange} />
          </div>
        </div>

        <h5>Payment Method</h5>
        <hr />
        <div className="form-check mb-3">
          <input className="form-check-input" type="radio" name="paymentMethod" id="creditCard" checked={form.paymentMethod === "creditCard"} onChange={handleChange} />
          <label className="form-check-label" htmlFor="creditCard">Credit Card</label>
        </div>
        <div className="form-check mb-3">
          <input className="form-check-input" type="radio" name="paymentMethod" id="paypal" checked={form.paymentMethod === "paypal"} onChange={handleChange} />
          <label className="form-check-label" htmlFor="paypal">PayPal</label>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="cardNumber" className="form-label">Card Number</label>
            <input type="text" className="form-control" id="cardNumber" placeholder="1234 5678 9101 1121" value={form.cardNumber} onChange={handleChange} />
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="expiryDate" className="form-label">Expiry Date</label>
            <input type="text" className="form-control" id="expiryDate" placeholder="MM/YY" value={form.expiryDate} onChange={handleChange} />
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="cvv" className="form-label">CVV</label>
            <input type="text" className="form-control" id="cvv" placeholder="123" value={form.cvv} onChange={handleChange} />
          </div>
        </div>

        <div className="text-center m-4">
          <button type="submit" className="buttonBuy">Pay Now</button>
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
