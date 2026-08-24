import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './navbar.css';
 function Navbar() {
  return (
    <nav className='Navbar'>
    <Link to="/"  onMouseEnter={(e) => {e.target.style.color = 'lightgray';}} onMouseLeave={(e) => {e.target.style.color = 'white';}}>Etusivu</Link>
      <Link to="/profile"  onMouseEnter={(e) => {e.target.style.color = 'lightgray';}} onMouseLeave={(e) => {e.target.style.color = 'white';}}>Oma sivu</Link>
      {/* allaolevaan ehto, että näkyviin vain jos on oikeudet lisätä */}
      <Link to="/addhours"  onMouseEnter={(e) => {e.target.style.color = 'lightgray';}} onMouseLeave={(e) => {e.target.style.color = 'white';}}>Lisää talkoot</Link>
      <Link to="/info"  onMouseEnter={(e) => {e.target.style.color = 'lightgray';}} onMouseLeave={(e) => {e.target.style.color = 'white';}}>Tietoja</Link>
      <Link to="/login"  onMouseEnter={(e) => {e.target.style.color = 'lightgray';}} onMouseLeave={(e) => {e.target.style.color = 'white';}}>Kirjaudu sisään</Link>
    </nav>
  );
}

export default Navbar;