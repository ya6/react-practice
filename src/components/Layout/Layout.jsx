/* eslint-disable import/order */
import { useContext, useEffect, useState } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import DataContext from "../../helpers/DataContect";

import "antd/dist/antd.css";
import {
  Layout as LayoutAnt, Button, Tooltip, message,
} from "antd";

import { LoginOutlined, LogoutOutlined } from "@ant-design/icons";

import styles from "./styles.module.scss";

const { Header, Footer, Content } = LayoutAnt;

const Layout = () => {
  const [isRedirect, setIsRedirect] = useState(false);
  const [logout, setLogout] = useState(false);
  const dataContext = useContext(DataContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (dataContext.message) {
      // setTimeout(() => {
      //   message.info({
      //     content: dataContext.message,
      //     style: {
      //       marginTop: "40vh",
      //     },
      //   });
      // }, 100);

      message.info({
        content: dataContext.message,
        style: {
          position: "fixed",
          top: "40%",
          left: " 70%",

        },
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
      dataContext.changeMessage("You are logged out");
    }
    return () => {
      setLogout(false);
    };
  }, [logout]);

  return (
    <LayoutAnt className={styles.layout}>
      <Header className={styles.header}>
        <NavLink className={styles.nav} to="/">
          Home
        </NavLink>
        <NavLink className={styles.nav} to="dictionary">
          Dictionary
        </NavLink>
        <NavLink className={styles.nav} to="statistics">
          Statistics
        </NavLink>
        <NavLink className={styles.nav} to="login">
          Login
        </NavLink>
        <NavLink className={styles.nav} to="signup">
          Signup
        </NavLink>
        <div>
          {dataContext.user === "guest" ? (
            <Tooltip title="login">
              <Button style={{ background: "gray" }} type="primary" shape="circle" icon={<LoginOutlined />} onClick={() => setIsRedirect(true)} />
            </Tooltip>
          ) : (
            <Tooltip title="logout">
              <Button type="primary" shape="circle" icon={<LogoutOutlined />} onClick={() => setLogout(true)} />
            </Tooltip>
          )}
        </div>
      </Header>

      <Content className={styles.content}>
        <Outlet />
      </Content>

      <Footer className={styles.footer}>ya6 2022</Footer>
    </LayoutAnt>
  );
};

export default Layout;
