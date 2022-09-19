import { Outlet, NavLink } from "react-router-dom";

const Layout = () => (
  <>
    <header>
      <NavLink to="/">Home</NavLink>
      <NavLink to="dictionary">Dictionary</NavLink>
      <NavLink to="login">Login</NavLink>
      <NavLink to="signup">Signup</NavLink>
    </header>

    <main>
      <Outlet />
    </main>

    <footer>ya6 2021</footer>
  </>
);

export default Layout;
