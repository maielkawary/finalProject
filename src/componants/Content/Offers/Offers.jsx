import './Offer.css'; 
import p1 from '../../../assets/product-2.jpg'
import p2 from '../../../assets/product-8.jpg'
import p3 from '../../../assets/product-3.jpg'
import p4 from '../../../assets/product8.jpg'
import p5 from '../../../assets/product-6.jpg'

function Offers() {
  return (
    <>
    <div className='container'>
        <div className='row'>
        <div className="latestOffers"> 
      <div className="col-lg-3 col-md-3 col-sm-3">
        <div className="card mb-3 imgHover">
          <img src="../resources/product-2.jpg" className="card-img-top imgCards" alt="img not found" />
          <div className="card-body align-self-center">
            <h5 className="card-title fontStyle">Galaxy A415 pro</h5>
          </div>
        </div>
        <div className="card imgHover">
          <img src="../resources/product-8.jpg" className="card-img-top imgCards" alt="img not found" />
          <div className="card-body align-self-center">
            <h5 className="card-title fontStyle">Hawawi GT2</h5>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-md-3 col-sm-3 ms-3">
        <div className="card mb-3 imgHover">
          <img src="../resources/product-3.jpg" className="card-img-top imgCards" alt="img not found" />
          <div className="card-body align-self-center">
            <h5 className="card-title fontStyle">Samsung 70inc</h5>
          </div>
        </div>
        <div className="card imgHover">
          <img src="../resources/product8.jpg" className="card-img-top imgCards" alt="img not found" />
          <div className="card-body align-self-center">
            <h5 className="card-title fontStyle">Samsung band6</h5>
          </div>
        </div>
      </div>

      <div className="col-lg-6 col-md-6 ms-4" id="catLeft">
        <div className="card d-flex align-items-center">
          <img src="../resources/product-6.jpg" className="card-img-top phoneStyle imgHover" alt="img not found" />
        </div>
        <div className="card mt-5 imgHover">
          <div className="card-body align-self-center">
            <h5 className="card-title fontStyle">Samsung Galaxy A32</h5>
          </div>
        </div>
      </div>
    </div>
        </div>
    </div>
    </>
    
    
  );
}

export default Offers;
