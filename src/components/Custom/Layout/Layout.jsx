/* eslint-disable import/order */
import { useContext, useEffect, useState } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import DataContext from "../../../helpers/DataContect";

import { route } from "../../../config/config";

import "antd/dist/antd.css";
import {
  Layout as LayoutAnt, Button, Tooltip, message,
} from "antd";

import { LoginOutlined, LogoutOutlined,  SyncOutlined } from "@ant-design/icons";

import styles from "./styles.module.scss";

const { Header, Footer, Content } = LayoutAnt;

const Layout = () => {
  const [isRedirect, setIsRedirect] = useState(false);
  const [logout, setLogout] = useState(false);
  const dataContext = useContext(DataContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (dataContext.message) {
      message.info({
        content: dataContext.message,
        style: {
          position: "fixed",
          top: "10%",
          right: "1%",
        },
      });
    }

    return () => {
      dataContext.setMessage(null);
    };
  }, [dataContext]);

  useEffect(() => {
    if (isRedirect) {
      navigate(route.SIGNIN);
    }
    return () => {
      setIsRedirect(false);
    };
  }, [isRedirect]);

  useEffect(() => {
    if (logout) {
      dataContext.setUser("guest");
      dataContext.setMessage("You are logged out");
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
        <NavLink className={styles.nav} to={route.DICTIONARY}>
          Dictionary
        </NavLink>
        <NavLink className={styles.nav} to={route.STATISTICS}>
          Statistics
        </NavLink>
        <NavLink className={styles.nav} to={route.SIGNIN}>
          Sign in
        </NavLink>
        <div style={{ display: "flex" }}>

          <div style={{ color: "white", marginRight: "0.5rem" }}>{`Hi, ${dataContext.user}`}</div>
          <div>
            {dataContext.user === "guest" ? (
              <Tooltip title="login">
                <Button style={{ background: "gray" }} type="primary" shape="circle"  icon={dataContext.processing ?  <SyncOutlined spin /> : <LoginOutlined />} onClick={() => setIsRedirect(true)} />
              </Tooltip>
            ) : (
              <Tooltip title="logout">
                <Button type="primary" shape="circle"  icon={dataContext.processing ?  <SyncOutlined spin /> : <LogoutOutlined />} onClick={() => setLogout(true)} />
              </Tooltip>
            )}
          </div>
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
