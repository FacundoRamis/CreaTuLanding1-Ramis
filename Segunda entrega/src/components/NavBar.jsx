import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Dunno</h1>
      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>
        <li className="dropdown">
          <span>Categorías</span>
          <ul className="dropdown-menu">
            <li><Link to="/categoria/anime">Anime</Link></li>
            <li><Link to="/categoria/futbol">Fútbol</Link></li>
            <li><Link to="/categoria/series">Series</Link></li>
            <li><Link to="/categoria/peliculas">Películas</Link></li>
            <li><Link to="/categoria/videojuegos">Videojuegos</Link></li>
            <li><Link to="/categoria/otros">Otros</Link></li>
          </ul>
        </li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
