import { useAppState } from "../../../../state/app-state";
import { route } from "../../../../config/config";
import { Outlet, NavLink } from "react-router-dom";

import { Box, Fab, Container, ThemeProvider } from "@mui/material";
import { LoginOutlined, LogoutOutlined } from "@mui/icons-material";
import "./style.scss";
import { theme } from "../../Theme/Theme";
import Navbar from "../NavBar/Navbar";

const Layout = () => {
  const [state, dispatch] = useAppState();

  const navLinkStyles = ({ isActive }) => {
    return isActive ? { fontWeight: "bold", color: "white" } : {};
  };
  return (
    <ThemeProvider theme={theme}>
      <Box>
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

        <Container>
          <Outlet />
        </Container>
        <footer></footer>
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
