import { useState, useEffect, useContext } from "react";
import useLoginUser from "../../../helpers/hooks/useLoginUser";
import DataContect from "../../../helpers/DataContect";
import LoginBasic from "../../Basic/Login/Login";
import StorageService from "../../../services/StorageService";
import { GUEST_NAME, messages } from "../../../config/config";
import { useAppState } from "../../../state/app-state";

const Login = () => {
  const [credentials, setCredentials] = useState(null);
  const [state, dispatch] = useAppState();

  const [serverAnswer] = useLoginUser(credentials);

  const dataContext = useContext(DataContect);

  // TODO message hook
  useEffect(() => {
    if (serverAnswer) {
      if (serverAnswer.userId) {
        dataContext.setUserData(serverAnswer);
        dataContext.setUser(serverAnswer.name);
        dataContext.setMessage(messages.L_IN);
        dataContext.setProcessing(false);
        dataContext.setIsAuth(true);
        //global
        dispatch({ type: "LOGGED_IN", userData: serverAnswer })
        StorageService.saveUser(serverAnswer);
      } else {
        dataContext.setUser(GUEST_NAME);
        dataContext.setMessage(serverAnswer.serverMessage || messages.UPS);
        //global
        dispatch({ type: "NOTIF_USER_LOGIN_FAIL", message: serverAnswer.serverMessage })
      }
    }
  }, [serverAnswer]);

  const loginHandler = (values) => {
    setCredentials(values);
    dataContext.setMessage(messages.PROCESSING);
    dataContext.setProcessing(true);
     //global
     dispatch({type: "NOTIF_START_USER_LOGIN"})  
  };

  return <LoginBasic loginHandler={loginHandler} />;
};
export default Login;
