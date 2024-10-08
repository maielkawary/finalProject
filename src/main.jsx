import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Products from "./componants/Products/Products.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/products' Component={Products} />
        <Route path='/' Component={App} />
      </Routes>
    </Router>
  </StrictMode>,
)
