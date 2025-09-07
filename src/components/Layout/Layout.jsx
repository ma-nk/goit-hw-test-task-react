
import { NavLink } from "react-router-dom";
import css from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      <header className={css.header}>
        <nav>
          <ul className={css.navList}>
            <li>
              <NavLink to="/" className={css.navLink}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/catalog" className={css.navLink}>
                Catalog
              </NavLink>
            </li>
            <li>
              <NavLink to="/favorites" className={css.navLink}>
                Favorites
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
