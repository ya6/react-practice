import { useState, useEffect, useContext } from "react";
import useLoginUser from "../../../helpers/hooks/useLoginUser";
import DataContect from "../../../helpers/DataContect";
import LoginBasic from '../../Basic/Login/Login' 

const Login = () => {
 
  const [credentials, setCredentials] = useState(null);
  const [serverAnswer] = useLoginUser(credentials);

  const dataContext = useContext(DataContect);

  // TODO message hook
  useEffect(() => {
    if (serverAnswer) {
      if (serverAnswer.name) {
        dataContext.setUser(serverAnswer.name);
        dataContext.setMessage("Нou are logged in");
        dataContext.setProcessing(false);  
      } else {
        dataContext.setUser("guest");
        dataContext.setMessage(serverAnswer.serverMessage || "ups");
      }
    }
  }, [serverAnswer]);

  const loginHandler = (values) => {
        dataContext.setMessage("processing...");
        dataContext.setProcessing(true);  
    setCredentials(values);
  };

  return (
    <LoginBasic loginHandler = {loginHandler} />
  )
   
};
export default Login;
