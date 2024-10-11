const Navbar = () => {
    return (
        <>
        <>
  {/* //nav bar */}
  <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <a
        className="navbar-brand fw-bold fs-2"
        href="../JS_project/index.html"
        style={{ color: "rgb(56, 56, 183)" }}
      >
        Luxora
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li
            className="nav-item dropdown fs-5 fw-bold fontStyle text-dark"
            style={{ marginTop: 12 }}
          >
            <a
              className="nav-link fontStyle"
              href="../JS_project/index.html"
              role="button"
            >
              Home
            </a>
          </li>
        </ul>
        <p
          id="signupLink"
          //onclick="location.href='http://127.0.0.1:5500/register.html';"
          style={{ cursor: "pointer", marginTop: 25, marginRight: 5 }}
          className="text-dark fs-5 fontStyle"
        >
          Signup
        </p>
        <span id="userDisplay" />
        {/* <p onclick="location.href='http://127.0.0.1:5500/login&register/login.html';" style="cursor: pointer;" class="text-dark fs-5 mt-3 me-2 fontStyle">
    Login
  </p> */}
        <i
          className="fa-solid fa-user"
          //onclick="location.href='http://127.0.0.1:5500/login.html';"
          style={{
            fontSize: 20,
            marginTop: 15,
            marginLeft: 10,
            cursor: "pointer"
          }}
        />
        <i
          className="fa-solid fa-cart-shopping"
          style={{
            fontSize: 20,
            marginTop: 16,
            marginLeft: 10,
            cursor: "pointer"
          }}
          //onclick={location.href ='http://127.0.0.1:5500/cart/cart.html'}
        />
      </div>
    </div>
  </nav>
</>

        {/* ///// */}
            <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a
      className="navbar-brand fw-bold fs-2"
      href="../JS_project/index.html"
      style={{ color: "rgb(56, 56, 183)" }}
    >
      Luxora
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li
          className="nav-item dropdown fs-5 fw-bold fontStyle text-dark"
          style={{ marginTop: 12 }}
        >
          <a
            className="nav-link fontStyle"
            href="../JS_project/index.html"
            role="button"
          >
            Home
          </a>
        </li>
      </ul>
      <p
        id="signupLink"
        //onClick="location.href='http://127.0.0.1:5500/register.html';"
        style={{ cursor: "pointer", marginTop: 25, marginRight: 5 }}
        className="text-dark fs-5 fontStyle"
      >
        Signup
      </p>
      <span id="userDisplay" />
      {/* <p onClick="location.href='http://127.0.0.1:5500/login&register/login.html';" style="cursor: pointer;" class="text-dark fs-5 mt-3 me-2 fontStyle">
    Login
  </p> */}
      <i
        className="fa-solid fa-user"
        //onClick="location.href='http://127.0.0.1:5500/login.html';"
        style={{
          fontSize: 20,
          marginTop: 15,
          marginLeft: 10,
          cursor: "pointer"
        }}
      />
      <i
        className="fa-solid fa-cart-shopping"
        style={{
          fontSize: 20,
          marginTop: 16,
          marginLeft: 10,
          cursor: "pointer"
        }}
        //onClick="location.href='http://127.0.0.1:5500/cart/cart.html';"
      />
    </div>
  </div>
</nav>
 
        </>

        
    )
}

export default Navbar