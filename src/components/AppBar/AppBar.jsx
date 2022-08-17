import { NavLink, Outlet } from 'react-router-dom';
import './AppBar.css';

const AppBar = () => {
  return (
    <>
      <header>
        <nav className="container_nav">
          <div>
            <NavLink
              to="/"
              className={({ isActive }) =>
                !isActive ? 'link' : 'link activeLink'
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/hero"
              className={({ isActive }) =>
                !isActive ? 'link' : 'link activeLink'
              }
            >
              Hero
            </NavLink>
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default AppBar;
