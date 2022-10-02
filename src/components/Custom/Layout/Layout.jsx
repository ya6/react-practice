/* eslint-disable import/order */
import { useEffect, useState } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useAppState } from "../../../state/app-state";

import {  route  } from "../../../config/config";

import "antd/dist/antd.css";
import { Layout as LayoutAnt, Button, Tooltip, message } from "antd";

import { LoginOutlined, LogoutOutlined, SyncOutlined } from "@ant-design/icons";

import styles from "./styles.module.scss";
import StorageService from "../../../services/StorageService";

const { Header, Footer, Content } = LayoutAnt;

const Layout = () => {
  const [isRedirect, setIsRedirect] = useState(false);
  const [state, dispatch] = useAppState();
  const navigate = useNavigate();

  useEffect(() => {
    if (isRedirect) {
      navigate(route.SIGNIN);
    }
    return () => {
      setIsRedirect(false);
    };
  }, [isRedirect]);

  const navLinkStyles = ({ isActive }) => {
    return isActive ? { fontWeight: "bold", color: "white" } : {};
  };
  const logoutHandler = () => {
    dispatch({ type: "LOGOUT" });
    StorageService.clearUser();
  };

  return (
    <LayoutAnt className={styles.layout}>
      {state.message && <div style={{ position: "fixed", top: "10%", right: "1%" }}>{state.message}</div>}
      <Header className={styles.header}>
       
        <NavLink className={styles.nav} style={navLinkStyles} to={route.TEXTBOOK}>
          TextBook
        </NavLink>
        <NavLink className={styles.nav} style={navLinkStyles} to={route.STATISTICS}>
          Statistics
        </NavLink>
        <NavLink className={styles.nav} style={navLinkStyles} to={route.ABOUT}>
          About
        </NavLink>
        <NavLink className={styles.nav} style={navLinkStyles} to={route.SIGNIN}>
          Sign in
        </NavLink>
        <div style={{ display: "flex" }}>
          <div style={{ color: "white", marginRight: "0.5rem" }}>{`Hi, ${state.userName}`}</div>
          <div>
            {state.isAuth ? (
              <Tooltip title="logout">
                <Button type="primary" shape="circle" icon={state.processing ? <SyncOutlined spin /> : <LogoutOutlined />} onClick={logoutHandler} />
              </Tooltip>
            ) : (
              <Tooltip title="login">
                <Button
                  style={{ background: "gray" }}
                  type="primary"
                  shape="circle"
                  icon={state.processing ? <SyncOutlined spin /> : <LoginOutlined />}
                  onClick={() => setIsRedirect(true)}
                />
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
