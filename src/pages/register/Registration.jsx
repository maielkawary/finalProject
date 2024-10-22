import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import './Registration.css';

const Registration = ({ onRegister }) => {
  const navigate = useNavigate(); // Initialize navigate
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegistration = (e) => {
    e.preventDefault(); // Prevent form submission
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

    // Check if passwords match
    if (password !== repeatPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    // Save user data to localStorage
    const userData = {
      name,
      email,
      password,
      phone,
    };
    localStorage.setItem('userData', JSON.stringify(userData));

     // Call onRegister function to pass user data to the parent
    onRegister(userData);
    //  navigate(`/${userData.name}`);
    alert('Registration successful!');
    navigate('/login'); // Redirect to login page on success
  };

  return (
    <section className="vh-90 bg-image mt-3">
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: '15px', boxShadow: '0px 0px 10px rgb(169, 168, 168)' }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">Create an account</h2>

                  <form id="registrationForm" onSubmit={handleRegistration}>
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="formName">Your Name</label>
                      <input
                        type="text"
                        id="formName"
                        className="form-control form-control-lg"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="formE">Your Email</label>
                      <input
                        type="email"
                        id="formE"
                        className="form-control form-control-lg"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="formPass">Password</label>
                      <input
                        type="password"
                        id="formPass"
                        className="form-control form-control-lg"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="formRePass">Repeat your password</label>
                      <input
                        type="password"
                        id="formRePass"
                        className="form-control form-control-lg"
                        value={repeatPassword}
                        onChange={(e) => setRepeatPassword(e.target.value)}
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="formPhone">Enter Your Phone</label>
                      <input
                        type="tel"
                        id="formPhone"
                        className="form-control form-control-lg"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>

                    {errorMessage && <p className="error-message fw-bold mb-3">{errorMessage}</p>}

                    <div className="d-flex justify-content-center">
                      <button type="submit" className="btn btn-block btn-lg gradient-custom-4">Register</button>
                    </div>

                    <p className="text-center text-muted mt-3 mb-3">
                      Already have an account? <Link to="/login" className="fw-bold text-body"><u>Login here</u></Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
