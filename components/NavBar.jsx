import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Install with: npm install lucide-react
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar">
      <h2 className="logo">R2C</h2>

      {/* Hamburger Icon (Mobile only) */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

      <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
        <li className="nav-links-item">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        </li>
        <li className="nav-links-item">
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        </li>
        <li className="nav-links-item">
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
