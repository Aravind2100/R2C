import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ArrowRain from '../components/ArrowRain';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from '../components/NavBar';

function App() {
  return (
    <Router>
      
      {/* <div className="navbar">
        <h2 className="logo">R2C</h2>
        <ul className="nav-links">
          <li className="nav-links-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-links-item">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-links-item">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div> */}

      <Navbar />

      {/* Route Content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
