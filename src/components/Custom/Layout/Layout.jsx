/* eslint-disable import/order */
import { useContext, useEffect, useState } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import DataContext from "../../../helpers/DataContect";

import { GUEST_NAME, route, messages } from "../../../config/config";

import "antd/dist/antd.css";
import { Layout as LayoutAnt, Button, Tooltip, message } from "antd";

import { LoginOutlined, LogoutOutlined, SyncOutlined } from "@ant-design/icons";

import styles from "./styles.module.scss";
import StorageService from "../../../services/StorageService";

const { Header, Footer, Content } = LayoutAnt;

const Layout = () => {
  const [isRedirect, setIsRedirect] = useState(false);
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

  const navLinkStyles = ({ isActive }) => {
    return isActive ? { fontWeight: "bold", color: "white" } : {};
  };
  const logoutHandler = () => {
    dataContext.setIsAuth(false);
    dataContext.setUser(GUEST_NAME);
    dataContext.setMessage(messages.L_OUT);
    StorageService.clearUser();
  };

  return (
    <LayoutAnt className={styles.layout}>
      <Header className={styles.header}>
        <NavLink className={styles.nav} style={navLinkStyles} to={route.HOME}>
          Home
        </NavLink>
        <NavLink className={styles.nav} style={navLinkStyles} to={route.TEXTBOOK}>
          TextBook
        </NavLink>
        <NavLink className={styles.nav} style={navLinkStyles} to={route.STATISTICS}>
          Statistics
        </NavLink>
        <NavLink className={styles.nav} style={navLinkStyles} to={route.SIGNIN}>
          Sign in
        </NavLink>
        <div style={{ display: "flex" }}>
          <div style={{ color: "white", marginRight: "0.5rem" }}>{`Hi, ${dataContext.user}`}</div>
          <div>
            {dataContext.isAuth ? (
              <Tooltip title="logout">
                <Button
                  type="primary"
                  shape="circle"
                  icon={dataContext.processing ? <SyncOutlined spin /> : <LogoutOutlined />}
                  onClick={logoutHandler}
                />
              </Tooltip>
            ) : (
              <Tooltip title="login">
                <Button
                  style={{ background: "gray" }}
                  type="primary"
                  shape="circle"
                  icon={dataContext.processing ? <SyncOutlined spin /> : <LoginOutlined />}
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
