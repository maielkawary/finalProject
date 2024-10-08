import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Products from "./pages/Products/Products.jsx"
import ProductDetails from './pages/ProductDetails/ProductDetails.jsx'
import  Footer  from './componants/Footer/Footer.jsx'
import  Navbar  from './componants/Navbar/Navbar.jsx'

function App() {



  return (
    <>
    
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/products/:categoryName' Component={Products} />
          <Route path='/products/:categoryName/productDetails/:id' Component={ProductDetails} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
