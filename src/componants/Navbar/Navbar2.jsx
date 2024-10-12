import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
function Navbar2() {
  const handleSignupClick = () => {
    window.location.href = 'http://127.0.0.1:5500/login&register/register.html';
  };

  const handleLoginClick = () => {
    window.location.href = 'http://127.0.0.1:5500/login&register/login.html';
  };

  const handleCartClick = () => {
    window.location.href = 'http://127.0.0.1:5500/cart/cart.html';
  };

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold fs-2" href='#' style={{ color: 'rgb(56, 56, 183)' }}>
          Luxora
        </a>
          {/* <Link to={{'/home'}} className="navbar-brand fw-bold fs-2"  style={{ color: 'rgb(56, 56, 183)' }} >Luxora</Link>   */}

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown fs-5 fw-bold fontStyle text-dark" style={{ marginTop: '12px' }}>
              <a className="nav-link fontStyle" href="#" role="button">
                Home
              </a>
            </li>
          </ul>
          <p onClick={handleSignupClick} style={{ cursor: 'pointer', marginTop: '25px', marginRight: '5px' }} className="text-dark fs-5 fontStyle">
            Signup
          </p>
          <i className="fa-solid fa-user" onClick={handleLoginClick} style={{ fontSize: '20px', marginTop: '15px', marginLeft: '10px', cursor: 'pointer' }}></i>
          <i className="fa-solid fa-cart-shopping" onClick={handleCartClick} style={{ fontSize: '20px', marginTop: '16px', marginLeft: '10px', cursor: 'pointer' }}></i>
        </div>
      </div>
    </nav>
  );
}

export default Navbar2;
