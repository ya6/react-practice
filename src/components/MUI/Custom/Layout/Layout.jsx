import { useAppState } from "../../../../state/app-state";
import { route } from "../../../../config/config";
import { Outlet, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

import { Box, Fab, Container, ThemeProvider, Snackbar, Alert } from "@mui/material";
import Grow from "@mui/material/Grow";
import { LoginOutlined, LogoutOutlined } from "@mui/icons-material";
import "./style.scss";
import { theme } from "../../Theme/Theme";
import Navbar from "../NavBar/Navbar";
const Layout = () => {
  const [showNotif, setShowNotif] = useState(false);
  const [state, dispatch] = useAppState();

  useEffect(() => {
    dispatch({ type: "SET_MESSAGE", message: `Hello, ${state.userName}!` });
  }, []);

  useEffect(() => {
    if (state.message) {
      setShowNotif(true);
    }
    return () => {
      const timer = setTimeout(() => {
        setShowNotif(false);
      }, 3000);
    };
  }, [state.message]);

  // const navLinkStyles = ({ isActive }) => {
  //   return isActive ? { fontWeight: "bold", color: "white" } : {};
  // };
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ background: "lightgray", minHeight: "100vh" }}>
        <Navbar />

        {/* <div style={{ display: "flex" }}>
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
        </div> */}

        <Container maxWidth="lg">
          <Outlet />
        </Container>
        <footer style={{ textAlign: "center", padding: "1rem" }}>2022</footer>

        <Snackbar
          open={showNotif}
          // onClose={handleClose} // clear timeout ???
          TransitionComponent={Grow}
        >
          <Alert style={{ position: "fixed", top: "10.5%", right: "4%", background: "white" }} severity="info">
            {state.message}
          </Alert>
        </Snackbar>
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
