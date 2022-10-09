import { useState, useEffect, useContext } from "react";
import useCreateUser from "../../../../helpers/hooks/useCreateUser";

import TabsContext from "../../../../helpers/TabsContect";
import { useAppState } from "../../../../state/app-state";
import { Box, Typography, Grid, TextField, Button } from "@mui/material";

const Register = () => {
  const [newUser, setNewUser] = useState(null);
  const [isRedirect, setIsRedirect] = useState(false);
  const [state, dispatch] = useAppState();

  const { setActiveIndex } = useContext(TabsContext);

  const [serverAnswer] = useCreateUser(newUser);

  // TODO message hook
  useEffect(() => {
    if (serverAnswer) {
      dispatch({ type: "END_PROCESSING" });
      if (serverAnswer.email) {
        dispatch({ type: "NOTIF_USER_REGISTERED" });
        setIsRedirect(true);
      } else {
        dispatch({ type: "NOTIF_USER_REGISTRATION_FAIL", message: serverAnswer.serverMessage });
      }
    }
  }, [serverAnswer]);

  useEffect(() => {
    if (isRedirect) {
      setActiveIndex(0);
    }
  }, [isRedirect]);

  const signupHandler = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setNewUser({
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
    });

    dispatch({ type: "NOTIF_START_USER_REGISTRATION" });
  };
  return (
    <Box>
      <Typography m={3} variant="h6">
        Register form
      </Typography>
      <Box component="form" noValidate onSubmit={signupHandler} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField autoComplete="given-name" name="name" required fullWidth id="firstName" label="First Name" autoFocus />
          </Grid>
          <Grid item xs={12}>
            <TextField required fullWidth id="email" label="Email Address" name="email" autoComplete="email" />
          </Grid>
          <Grid item xs={12}>
            <TextField required fullWidth name="password" label="Password" type="password" id="password" autoComplete="new-password" />
          </Grid>
        </Grid>
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
          Register
        </Button>
      </Box>
    </Box>
  );
};
export default Register;
