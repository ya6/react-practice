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
        dataContext.changeUser(serverAnswer.name);
        dataContext.changeMessage("Нou are logged in");
        dataContext.changeProcessing(false);  
      } else {
        dataContext.changeUser("guest");
        dataContext.changeMessage(serverAnswer.serverMessage || "ups");
      }
    }
  }, [serverAnswer]);

  const loginHandler = (values) => {
        dataContext.changeMessage("processing...");
        dataContext.changeProcessing(true);  
    setCredentials(values);
  };

  return (
    <LoginBasic loginHandler = {loginHandler} />
  )
   
};
export default Login;
