import { useState, useEffect, useContext } from "react";
import useCreateUser from "../../../helpers/hooks/useCreateUser";
import DataContect from "../../../helpers/DataContect";
import TabsContext from "../../../helpers/TabsContect";
import RegisterBasic from "../../Basic/Register/Register";


const Register = () => {
  const [newUser, setNewUser] = useState(null);
  const [isRedirect, setIsRedirect] = useState(false);

  const dataContext = useContext(DataContect);


  const {setActiveIndex} = useContext(TabsContext);
  
  const [serverAnswer] = useCreateUser(newUser);

  // TODO message hook
  useEffect(() => {
    if (serverAnswer) {
      dataContext.setProcessing(false);  
      if (serverAnswer.email) {
        dataContext.setMessage("user created");
        setIsRedirect(true);
      } else {
        dataContext.setMessage(serverAnswer.serverMessage || "ups");
      }
    }
  }, [serverAnswer]);

  useEffect(() => {
    if (isRedirect) {
      setActiveIndex(0)
    }
  }, [isRedirect]);

  const signupHandler = (values) => {
    setNewUser(values);
    dataContext.setMessage("processing...");
    dataContext.setProcessing(true);  
  };
  return <RegisterBasic signupHandler={signupHandler} />;
};
export default Register;
