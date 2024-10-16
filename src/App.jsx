import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import ProductList from './Components/productList';
import ProductDetailsPage from './Components/ProductDetailsPage';
import CartList from './Components/CartList';
import CheckOut from "./Components/CheckOut";
import Confirmation from "./Components/Confirmation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/products/details/:id" element={<ProductDetailsPage />} />
        <Route path="/products/cart/:userId" element={<CartList />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/checkout/:userId/:productId/:quantity" element={<CheckOut />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
