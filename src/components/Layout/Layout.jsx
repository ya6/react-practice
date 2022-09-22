import { Outlet, NavLink } from "react-router-dom";
import "antd/dist/antd.css";
import { Layout as LayoutAnt } from "antd";
import styles from "./styles.module.scss";

const {
  Header, Footer, Sider, Content,
} = LayoutAnt;

const Layout = () => (
  <LayoutAnt className={styles.layout}>
    <Header className={styles.header}>
      <NavLink className={styles.nav} to="/">Home</NavLink>
      <NavLink className={styles.nav} to="dictionary">Dictionary</NavLink>
      <NavLink className={styles.nav} to="statistics">Statistics</NavLink>
      <NavLink className={styles.nav} to="login">Login</NavLink>
      <NavLink className={styles.nav} to="signup">Signup</NavLink>
    </Header>

    <Content>
      <Outlet />
    </Content>

    <Footer className={styles.footer}>ya6 2022</Footer>
  </LayoutAnt>
);

export default Layout;
