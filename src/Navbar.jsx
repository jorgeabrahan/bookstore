// eslint-disable-next-line import/no-extraneous-dependencies
import { Outlet, Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav>
        <h1>Bookstore CMS</h1>
        <ul>
          <li><Link to="/">Books</Link></li>
          <li><Link to="/categories">Categories</Link></li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
