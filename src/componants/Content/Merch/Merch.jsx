import './Merch.css'
import logo from '../../../assets/luxora.jpg'
const Merch = () => {
    return(
        <>
        <div className='container mt-5'>
            <div className='row'>
            <div className="card text-dark mt-4 bg-body-light border-0 mb-4">
      <h1 className="text-dark fontStyle mb-4 mt-4">Find all you want</h1>
      <img src={logo} className="card-img imgCard" alt="img not found" />
      <div className="card-img-overlay">
      </div>
    </div>
            </div>
        </div>
        </>
       
    )
}

export default Merch