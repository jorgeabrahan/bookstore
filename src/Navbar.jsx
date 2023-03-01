import { Outlet, NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <>
      <nav className="center navbar">
        <div className="navbar__content">
          <h1 className="navbar__title">Bookstore CMS</h1>
          <ul className="navbar__list">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? '--active' : '')}
              >
                Books
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/categories"
                className={({ isActive }) => (isActive ? '--active' : '')}
              >
                Categories
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <button type="button" className="navbar__button">
            <span className="material-symbols-outlined">
              person
            </span>
          </button>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
