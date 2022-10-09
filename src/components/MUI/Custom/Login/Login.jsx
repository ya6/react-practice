import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import useLoginUser from "../../../../helpers/hooks/useLoginUser";
import StorageService from "../../../../services/StorageService";
import { useAppState } from "../../../../state/app-state";
import TabsContext from "../../../../helpers/TabsContect";

import { Box, Typography, Grid, TextField, Button } from "@mui/material";

const Login = () => {
  const [credentials, setCredentials] = useState(null);
  const [state, dispatch] = useAppState();
  const { redirectIfLogin } = useContext(TabsContext);

  const [serverAnswer = null] = useLoginUser(credentials);
  const navigate = useNavigate();

  useEffect(() => {
    if (state.userData.userId) {
      navigate(redirectIfLogin);
    }
  }, [state.userData]);

  useEffect(() => {
    if (serverAnswer) {
      if (serverAnswer.userId) {
        dispatch({ type: "LOGGED_IN", userData: serverAnswer });
        StorageService.saveUser(serverAnswer);
      } else {
        dispatch({ type: "NOTIF_USER_LOGIN_FAIL", message: serverAnswer.serverMessage });
      }
    }
  }, [serverAnswer]);

  const loginHandler = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setCredentials({
      email: data.get("email"),
      password: data.get("password"),
    });
   

    dispatch({ type: "NOTIF_START_USER_LOGIN" });
  };

  return (
    <Box>
      <Typography m={3} variant="h6">
        Login form
      </Typography>
      <Box component="form" noValidate onSubmit={loginHandler} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField required fullWidth id="email" label="Email Address" name="email" autoComplete="email" />
          </Grid>
          <Grid item xs={12}>
            <TextField required fullWidth name="password" label="Password" type="password" id="password" autoComplete="new-password" />
          </Grid>
        </Grid>
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
          Login
        </Button>
      </Box>
    </Box>
  );
};
export default Login;
