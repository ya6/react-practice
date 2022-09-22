import { Outlet, NavLink } from "react-router-dom";
import styles from "./styles.module.scss";

const Layout = () => (
  <>
    <header className={styles.nav}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="dictionary">Dictionary</NavLink>
      <NavLink to="statistics">Statistics</NavLink>
      <NavLink to="login">Login</NavLink>
      <NavLink to="signup">Signup</NavLink>
    </header>

    <main>
      <Outlet />
    </main>

    <footer>ya6 2022</footer>
  </>
);

export default Layout;
