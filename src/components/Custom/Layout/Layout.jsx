/* eslint-disable import/order */
import { useEffect, useState } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useAppState } from "../../../state/app-state";

import { route } from "../../../config/config";

import styles from "./styles.module.scss";
import StorageService from "../../../services/StorageService";

import 'typeface-roboto-material'
import "./style.scss";

import { Button, Fab } from "@mui/material";
import { LoginOutlined, LogoutOutlined } from "@mui/icons-material";

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
    <div className={styles.layout}>
      {state.message && <div style={{ position: "fixed", top: "10%", right: "1%" }}>{state.message}</div>}
      <header className={styles.header}>
        <NavLink className={styles.nav} style={navLinkStyles} to={route.TEXTBOOK}>
          TextBook
        </NavLink>

        <NavLink className={styles.nav} style={navLinkStyles} to={route.REPEAT}>
          Repeat List
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
              <Button variant="contained" startIcon={<LogoutOutlined />} onClick={logoutHandler} />
            ) : (
              // <Button style={{ background: "gray" }} variant="contained" startIcon={<LoginOutlined />} onClick={() => setIsRedirect(true)} />
              <Fab size="small" color="primary" aria-label="add" onClick={() => setIsRedirect(true)}>
                <LoginOutlined />
              </Fab>
            )}
          </div>
        </div>
      </header>

      <content className={styles.content}>
        <Outlet />
      </content>

      <footer className={styles.footer}>ya6 2022</footer>
    </div>
  );
};

export default Layout;
