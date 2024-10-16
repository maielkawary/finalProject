import { useLocation } from "react-router-dom";

const Confirmation = () => {
  const { state } = useLocation();
  const { userId, productId, quantity, totalPrice, form, productDetails } = state;

  return (
    <div className="container">
      <h2 className="text-center mt-3 fontStyle">Order Confirmation</h2>
      <div className="card mt-5">
        <div className="card-header">Order Details</div>
        <div className="card-body">
          <h5 className="card-title">{productDetails.title}</h5>
          <p className="card-text">Quantity: {quantity}</p>
          <p className="card-text">Price: ${productDetails.price}</p>
          <p className="card-text">Total: ${totalPrice.toFixed(2)}</p>
        </div>
      </div>
      <div className="card mt-3">
        <div className="card-header">Shipping Information</div>
        <div className="card-body">
          <p className="card-text">Name: {form.fullName}</p>
          <p className="card-text">Email: {form.email}</p>
          <p className="card-text">Address: {form.address}, {form.city}, {form.postalCode}</p>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
