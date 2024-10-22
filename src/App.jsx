import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home/Home'
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import Products from "./pages/Products/Products.jsx"
import ProductDetails from './pages/ProductDetails/ProductDetails.jsx'
import  Footer  from './componants/Footer/Footer2.jsx'
import  Navbar  from './componants/Navbar/Navbar2.jsx'
// import { BrowserRouter } from "react-router-dom";
// import './App.css';
import ProductList from './Components/ProductList.jsx';
import ProductDetailsPage from './Components/ProductDetailsPage';
import CartList from './Components/CartList';
import CheckOut from "./Components/CheckOut";
import Confirmation from "./Components/Confirmation";
import Login from './pages/login/Login.jsx';
import Registration from './pages/register/Registration.jsx';
import ProfileCard from './pages/profilecard/ProfileCard.jsx';


function App() {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('userData');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const handleRegistration = (userData) => {
    setUser(userData);
    localStorage.setItem('userData', JSON.stringify(userData)); // Save user data to localStorage
  };


  return (
    
    <BrowserRouter>
          <Navbar />
      
       <Routes>
        <Route path='/' Component={Home} />
        
        <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration onRegister={handleRegistration} />} />
          <Route path="/" element={user ? <ProfileCard {...user} /> : <Registration onRegister={handleRegistration} />} />

          <Route path='/products/:categoryName' Component={Products} />
          <Route path='/products/:categoryName/productDetails/:id' Component={ProductDetailsPage} />
       
        <Route path="/products/details/:id" element={<ProductDetailsPage />} />
        <Route path="/products/cart/:userId" element={<CartList />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/checkout/:userId/:productId/:quantity" element={<CheckOut />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
