/* eslint-disable import/order */
import { useContext } from "react";
import DataContext from "../../helpers/DataContect";

import { Outlet, NavLink } from "react-router-dom";
import "antd/dist/antd.css";
import {
  Layout as LayoutAnt, Button, Tooltip, Alert, message,
} from "antd";
import {
  LoginOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

import styles from "./styles.module.scss";

const {
  Header, Footer, Sider, Content,
} = LayoutAnt;

const Layout = () => {
  const dataContext = useContext(DataContext);
  if (dataContext.message) {
    message.info(dataContext.message.toString());
  }
  return (

    <LayoutAnt className={styles.layout}>
      <Header className={styles.header}>
        <NavLink className={styles.nav} to="/">Home</NavLink>
        <NavLink className={styles.nav} to="dictionary">Dictionary</NavLink>
        <NavLink className={styles.nav} to="statistics">Statistics</NavLink>
        <NavLink className={styles.nav} to="login">Login</NavLink>
        <NavLink className={styles.nav} to="signup">Signup</NavLink>
        <div>
          <Tooltip title="login">
            <Button type="primary" shape="circle" icon={<LoginOutlined />} />
          </Tooltip>
        </div>
      </Header>

      <Content>
        <Outlet />
      </Content>

      <Footer className={styles.footer}>ya6 2022</Footer>
      {/* {dataContext.message && <Alert message={dataContext.message} type="info" showIcon /> } */}
      {/* <Alert message={dataContext.message} type="info" showIcon /> */}
    </LayoutAnt>
  );
};

export default Layout;
