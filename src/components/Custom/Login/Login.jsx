import { useState, useEffect, useContext } from "react";
import useLoginUser from "../../../helpers/hooks/useLoginUser";
import LoginBasic from "../../Basic/Login/Login";
import StorageService from "../../../services/StorageService";
import { useAppState } from "../../../state/app-state";
import { useNavigate } from "react-router-dom";
import TabsContext from "../../../helpers/TabsContect";

const Login = () => {
  const [credentials, setCredentials] = useState(null);
  const [state, dispatch] = useAppState();
  const { redirectIfLogin } = useContext(TabsContext);

  const [serverAnswer=null] = useLoginUser(credentials);
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

  const loginHandler = (values) => {
    setCredentials(values);

    dispatch({ type: "NOTIF_START_USER_LOGIN" });
  };

  return <LoginBasic loginHandler={loginHandler} />;
};
export default Login;
