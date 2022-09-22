/* eslint-disable import/order */
import { useContext, useEffect, useState } from "react";
import DataContext from "../../helpers/DataContect";

import { Outlet, NavLink, useNavigate } from "react-router-dom";
import "antd/dist/antd.css";
import {
  Layout as LayoutAnt, Button, Tooltip, message,
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
  const [isRedirect, setIsRedirect] = useState(false);
  const [logout, setLogout] = useState(false);
  const dataContext = useContext(DataContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (dataContext.message) {
      message.info({
        content: dataContext.message,
        className: styles.message,
      });
    }

    return () => {
      dataContext.changeMessage(null);
    };
  }, [dataContext]);

  useEffect(() => {
    if (isRedirect) {
      navigate("/login");
    }
    return () => {
      setIsRedirect(false);
    };
  }, [isRedirect]);

  useEffect(() => {
    if (logout) {
      dataContext.changeUser("guest");
    }
    return () => {
      setLogout(false);
    };
  }, [logout]);

  return (

    <LayoutAnt className={styles.layout}>
      <Header className={styles.header}>
        <NavLink className={styles.nav} to="/">Home</NavLink>
        <NavLink className={styles.nav} to="dictionary">Dictionary</NavLink>
        <NavLink className={styles.nav} to="statistics">Statistics</NavLink>
        <NavLink className={styles.nav} to="login">Login</NavLink>
        <NavLink className={styles.nav} to="signup">Signup</NavLink>
        <div>
          {dataContext.user === "guest" ? (
            <Tooltip title="login">
              <Button style={{ background: "gray" }} type="primary" shape="circle" icon={<LoginOutlined />} onClick={() => setIsRedirect(true)} />
            </Tooltip>
          ) : (
            <Tooltip title="logout">
              <Button
                type="primary"
                shape="circle"
                icon={<LogoutOutlined />}
                onClick={() => setLogout(true)}
              />
              {/* <Button type="primary" shape="circle" icon={<LogoutOutlined />} /> */}
            </Tooltip>
          )}

        </div>
      </Header>

      <Content>
        <Outlet />
      </Content>

      <Footer className={styles.footer}>ya6 2022</Footer>

    </LayoutAnt>
  );
};

export default Layout;
