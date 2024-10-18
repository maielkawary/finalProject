import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './login/Login.jsx';
import Registration from './register/Registration.jsx';
import ProfileCard from './profilecard/ProfileCard';


function App() {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('userData');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const handleRegistration = (userData) => {
    setUser(userData);
    localStorage.setItem('userData', JSON.stringify(userData)); // Save user data to localStorage
  };
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/registration">Register</Link>
        </nav>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration onRegister={handleRegistration} />} />
          <Route path="/" element={user ? <ProfileCard {...user} /> : <Registration onRegister={handleRegistration} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;


