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

  
  useEffect(() => {
    if (serverAnswer) {
      if (serverAnswer.userId) {
     
        dispatch({ type: "LOGGED_IN", userData: serverAnswer })
        StorageService.saveUser(serverAnswer);
      } else {
       
        dispatch({ type: "NOTIF_USER_LOGIN_FAIL", message: serverAnswer.serverMessage })
      }
    }
  }, [serverAnswer]);

  const loginHandler = (values) => {
    setCredentials(values);
    
     dispatch({type: "NOTIF_START_USER_LOGIN"})  
  };

  return <LoginBasic loginHandler={loginHandler} />;
};
export default Login;
