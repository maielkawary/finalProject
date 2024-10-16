
import img1 from '../../../assets/c1.jpg'
import img2 from '../../../assets/c2.jpg'
import img3 from '../../../assets/c3.png'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function Carousel() {
  return (
    <>
    <div className='container'>
      <div className='row'>
      <div id="carouselExampleIndicators" className="carousel slide mt-3 mb-5" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={img1} className="d-block w-100" alt="Image not found" />
        </div>
        <div className="carousel-item">
          <img src={img2} className="d-block w-100" alt="Image not found" />
        </div>
        <div className="carousel-item">
          <img src={img3} className="d-block w-100" alt="Image not found" />
        </div>
      </div>

      
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

    
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
      </div>
    </div>
    </>
    
  );
}

export default Carousel;
