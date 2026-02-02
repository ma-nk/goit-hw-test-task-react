import { NavLink, Link } from "react-router-dom";

import clsx from "clsx";

import css from "./Layout.module.css";

const buildLinkClass = ({ isActive }) =>
  clsx(css.navLink, isActive && css.active);

const Layout = ({ children }) => {
  return (
    <div className={css.layout}>
      <header className={css.header}>
        <div className={css.container}>
          <Link to="/" className={css.logo}>
            TravelTrucks
          </Link>

          <nav className={css.nav}>
            <ul className={css.navList}>
              <li>
                <NavLink to="/" className={buildLinkClass}>
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/catalog" className={buildLinkClass}>
                  Catalog
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>{children}</main>
    </div>
  );
};

export default Layout;
