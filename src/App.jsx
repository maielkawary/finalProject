import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './componants/home/home'
import {Button} from 'react-bootstrap';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
    </>
  )
}

export default App
