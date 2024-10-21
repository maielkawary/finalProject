import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import './Login.css';

const Login = () => {
  const navigate = useNavigate(); // Initialize navigate
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    // Load stored email and password if they exist
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (storedEmail) {
      setEmail(storedEmail);
      setRememberMe(true); 
    }

    if (storedPassword) {
      setPassword(storedPassword); // Auto-fill password (optional)
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    setErrorMessage(''); // Reset error message

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    // Validate password length
    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long.');
      return;
    }

    // Check credentials (replace with your logic)
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (email === storedEmail && password === storedPassword) {
      alert('Login successful!');
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/home'); // Redirect to home page on successful login
    } else {
      setErrorMessage('Invalid email or password. Please try again.');
      localStorage.setItem('isLoggedIn', 'false');
    }

    // Store email if "Remember Me" is checked
    if (rememberMe) {
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
    } else {
      localStorage.removeItem('email');
      localStorage.removeItem('password');
    }
  };

  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5" style={{ width: '40%' }}>
            <img
              src="photo_2024-09-27_15-25-13.jpg"
              className="img-fluid mb-3 mt-4"
              alt="image"
              style={{ width: '100%' }}
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form id="loginForm" onSubmit={handleLogin}>
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                <a href="https://facebook.com/" className="btn btn-floating mx-1" style={{ backgroundColor: 'rgb(56, 56, 183)', color: 'aliceblue' }}>
                  <FaFacebookF />
                </a>
                <a href="https://x.com/" className="btn btn-floating mx-1" style={{ backgroundColor: 'rgb(56, 56, 183)', color: 'aliceblue' }}>
                  <FaTwitter />
                </a>
                <a href="https://linkedin.com/" className="btn btn-floating mx-1" style={{ backgroundColor: 'rgb(56, 56, 183)', color: 'aliceblue' }}>
                  <FaLinkedinIn />
                </a>
              </div>

              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0">Or</p>
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="FormE">Email address</label>
                <input
                  type="email"
                  id="FormE"
                  className="form-control form-control-lg"
                  placeholder="Enter a valid email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-outline mb-3">
                <label className="form-label" htmlFor="FormPass">Password</label>
                <input
                  type="password"
                  id="FormPass"
                  className="form-control form-control-lg"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {errorMessage && <p className="error-message fw-bold mt-2 pt-1 mb-0">{errorMessage}</p>}

              <div className="d-flex justify-content-between align-items-center">
                <div className="form-check mb-0">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    id="rememberMe"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                  />
                  <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                </div>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button type="submit" className="btn btn-lg btn-block" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem', backgroundColor: 'rgb(56, 56, 183)', color: 'aliceblue' }}>
                  Login
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Do not have an account? <Link to="/registration" className="link-danger">Register</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
