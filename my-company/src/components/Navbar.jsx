import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ backgroundColor: 'navy', padding: '10px', display: 'flex', justifyContent: 'right' }}>
      <Link to="/" style={{ color: 'white', marginRight: '15px' }}>Home</Link>
      <Link to="/about" style={{ color: 'white', marginRight: '15px' }}>About</Link>
      <Link to="/services" style={{ color: 'white', marginRight: '15px' }}>Services</Link>
      <Link to="/contact" style={{ color: 'white' }}>Contact</Link>
    </nav>
  );
}

export default Navbar;
