const Footer = () => {
    return(
        <>
    {/* Footer */}
    <footer
        className="text-center text-lg-start bg-body-tertiary mt-5 "
        style={{ backgroundColor: "rgb(235, 235, 235)" }}
    >
        {/* Section: Social media */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        {/* Left */}
        <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
        </div>
        {/* Left */}
        {/* Right */}
        <div>
            <a
            href=""
            className="me-4 text-reset"
            style={{ textDecoration: "none" }}
            >
            <i className="fab fa-facebook-f text-primary" />
            </a>
            <a
            href=""
            className="me-4 text-reset"
            style={{ textDecoration: "none" }}
            >
            <i className="fab fa-twitter  text-dark" />
            </a>
            <a
            href=""
            className="me-4 text-reset "
            style={{ textDecoration: "none" }}
            >
            <i className="fab fa-google text-primary" />
            </a>
            <a
            href=""
            className="me-4 text-reset"
            style={{ textDecoration: "none" }}
            >
            <i className="fab fa-instagram text-danger" />
            </a>
            <a
            href=""
            className="me-4 text-reset"
            style={{ textDecoration: "none" }}
            >
            <i className="fab fa-linkedin text-primary" />
            </a>
            <a
            href=""
            className="me-4 text-reset"
            style={{ textDecoration: "none" }}
            >
            <i className="fab fa-github text-success" />
            </a>
        </div>
        {/* Right */}
        </section>
        {/* Section: Social media */}
        {/* Section: Links  */}
        <section className="">
        <div className="container text-center text-md-start mt-5">
            {/* Grid row */}
            <div className="row mt-3">
            {/* Grid column */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* Content */}
                <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3 fontStyle" />
                Luxora
                </h6>
                <p>
                Luxora is a big prand selling TVS,smart phones,watchs and multible
                electroncs
                </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4 fontStyle">Products</h6>
                <p>
                {/* <a href="#!" class="text-reset" style="text-decoration: none;">TV</a> */}
                <a
                    className="text-reset"
                    href="../categoryProducts/index.html?category=men's clothing"
                    style={{ textDecoration: "none" }}
                >
                    men's clothing
                </a>
                </p>
                <p>
                {/* <a href="#!" class="text-reset" style="text-decoration: none;">Smart phone</a> */}
                <a
                    className="text-reset"
                    href="../categoryProducts/index.html?category=jewelery"
                    style={{ textDecoration: "none" }}
                >
                    jewelery
                </a>
                </p>
                <p>
                {/* <a href="#!" class="text-reset" style="text-decoration: none;">watch</a> */}
                <a
                    className="text-reset"
                    href="../categoryProducts/index.html?category=electronics"
                    style={{ textDecoration: "none" }}
                >
                    electronics
                </a>
                </p>
                <p>
                {/* <a href="#!" class="text-reset" style="text-decoration: none;">tablets</a> */}
                <a
                    className="text-reset"
                    href="../categoryProducts/index.html?category=women's clothing"
                    style={{ textDecoration: "none" }}
                >
                    women's clothing
                </a>
                </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4 fontStyle">
                Useful links
                </h6>
                <p>
                <a
                    href="#"
                    className="text-reset"
                    style={{ textDecoration: "none" }}
                >
                    Pricing
                </a>
                </p>
                <p>
                <a
                    href="#"
                    className="text-reset"
                    style={{ textDecoration: "none" }}
                >
                    Settings
                </a>
                </p>
                <p>
                <a
                    href="#"
                    className="text-reset"
                    style={{ textDecoration: "none" }}
                >
                    Orders
                </a>
                </p>
                <p>
                <a
                    href="#"
                    className="text-reset"
                    style={{ textDecoration: "none" }}
                >
                    Help
                </a>
                </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4 fontStyle">
                Contact us
                </h6>
                <p>
                <i className="fas fa-home me-3" /> Egypt
                </p>
                <p>
                <i className="fas fa-envelope me-3" />
                info@example.com
                </p>
                <p>
                <i className="fas fa-phone me-3" />
                015248545251
                </p>
                <p>
                <i className="fas fa-print me-3" />
                012474526554
                </p>
            </div>
            {/* Grid column */}
            </div>
            {/* Grid row */}
        </div>
        </section>
        {/* Section: Links  */}
    </footer>
    {/* Footer */}
    </>
    )
    
}

export default Footer