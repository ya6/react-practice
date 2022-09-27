import { useState, useEffect, useContext } from "react";
import useLoginUser from "../../../helpers/hooks/useLoginUser";
import DataContect from "../../../helpers/DataContect";
import LoginBasic from "../../Basic/Login/Login";
import StorageService from "../../../services/StorageService";
import { GUEST_NAME } from "../../../config/config"

const Login = () => {
  const [credentials, setCredentials] = useState(null);
  const [serverAnswer] = useLoginUser(credentials);

  const dataContext = useContext(DataContect);

  // TODO message hook
  useEffect(() => {
    if (serverAnswer) {
      if (serverAnswer.userId) {
        dataContext.setUser(serverAnswer.name);
        dataContext.setMessage("Нou are logged in");
        dataContext.setProcessing(false);
        dataContext.setIsAuth(true);
        StorageService.saveUser(serverAnswer);
      } else {
        dataContext.setUser(GUEST_NAME);
        dataContext.setMessage(serverAnswer.serverMessage || "ups");
      }
    }
  }, [serverAnswer]);

  const loginHandler = (values) => {
    dataContext.setMessage("processing...");
    dataContext.setProcessing(true);
    setCredentials(values);
  };

  return <LoginBasic loginHandler={loginHandler} />;
};
export default Login;
