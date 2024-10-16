import '@fortawesome/fontawesome-free/css/all.min.css'; 

function Footer2() {
  return (
    <>
    <div className='container'>
        <div className='row'>
        <footer className="text-center text-lg-start bg-body-tertiary mt-5" style={{ backgroundColor: 'rgb(235, 235, 235)' }}>
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <a href="#" className="me-4 text-reset" style={{ textDecoration: 'none' }}>
            <i className="fab fa-facebook-f text-primary"></i>
          </a>
          <a href="#" className="me-4 text-reset" style={{ textDecoration: 'none' }}>
            <i className="fab fa-twitter text-dark"></i>
          </a>
          <a href="#" className="me-4 text-reset" style={{ textDecoration: 'none' }}>
            <i className="fab fa-google text-primary"></i>
          </a>
          <a href="#" className="me-4 text-reset" style={{ textDecoration: 'none' }}>
            <i className="fab fa-instagram text-danger"></i>
          </a>
          <a href="#" className="me-4 text-reset" style={{ textDecoration: 'none' }}>
            <i className="fab fa-linkedin text-primary"></i>
          </a>
          <a href="#" className="me-4 text-reset" style={{ textDecoration: 'none' }}>
            <i className="fab fa-github text-success"></i>
          </a>
        </div>
      </section>
      <section>
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>Luxora
              </h6>
              <p>
                Luxora is a big brand selling TVs, smartphones, watches, and multiple electronics.
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p><a href="#!" className="text-reset" style={{ textDecoration: 'none' }}>TV</a></p>
              <p><a href="#!" className="text-reset" style={{ textDecoration: 'none' }}>Smartphone</a></p>
              <p><a href="#!" className="text-reset" style={{ textDecoration: 'none' }}>Watch</a></p>
              <p><a href="#!" className="text-reset" style={{ textDecoration: 'none' }}>Tablets</a></p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful Links</h6>
              <p><a href="#!" className="text-reset" style={{ textDecoration: 'none' }}>Pricing</a></p>
              <p><a href="#!" className="text-reset" style={{ textDecoration: 'none' }}>Settings</a></p>
              <p><a href="#!" className="text-reset" style={{ textDecoration: 'none' }}>Orders</a></p>
              <p><a href="#!" className="text-reset" style={{ textDecoration: 'none' }}>Help</a></p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact Us</h6>
              <p><i className="fas fa-home me-3"></i> Egypt</p>
              <p><i className="fas fa-envelope me-3"></i> info@example.com</p>
              <p><i className="fas fa-phone me-3"></i> 015248545251</p>
              <p><i className="fas fa-print me-3"></i> 012474526554</p>
            </div>
          </div>
        </div>
      </section>
    </footer>
        </div>
    </div>
    </>
   
  );
}

export default Footer2;
