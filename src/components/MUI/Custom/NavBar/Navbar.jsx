import { useAppState } from "../../../../state/app-state";
import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { pages, route, version } from "../../../../config/config";
import StorageService from "../../../../services/StorageService";

import { AppBar, Box, Toolbar, Typography, Menu, MenuItem, Container, Avatar, Button, Tooltip } from "@mui/material";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import { Login } from "@mui/icons-material";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const [{isAuth}, dispatch] =useAppState()

  const navigate = useNavigate()

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    if (isAuth) {
      setAnchorElUser(event.currentTarget);
      
    }
    navigate(route.SIGNIN)
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (setting) => {
    switch (setting) {
      case "Logout":
        dispatch({ type: "LOGOUT" });
        StorageService.clearUser();
        break;
    
      default:
        break;
    }
    setAnchorElUser(null);
  };

  const navLinkStyles = ({ isActive }) => {
    return isActive ? { fontWeight: "bold", color: "white", textDecoration: "none" } : { color: "white", textDecoration: "none", fontWeight: 400 };
  };

 

  return (
    <AppBar sx={{ background: "#2B2E4A" }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <TipsAndUpdatesOutlinedIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Eng {version}
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon  fontSize="large"/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, idx) => (
                <NavLink style={{textDecoration: "none"}} key={page.page} to={page.route}>
                 <MenuItem key={`${page.page}-2`} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.page}</Typography>
                </MenuItem>
                </NavLink>
              ))}
            </Menu>
          </Box>
          <TipsAndUpdatesOutlinedIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Eng {version}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, idx) => (
              <Button key={`${idx}2`} sx={{ my: 2, color: "white", display: "block" }}>
                <NavLink key={idx} style={navLinkStyles} to={page.route}>
                  {page.page}
                </NavLink>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title={ isAuth ? "Open settings" : "Log in"}>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar   sx={{ width: 32, height: 32 }} alt="person" src="" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={()=> {handleCloseUserMenu(setting)}}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
