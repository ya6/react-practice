import { useState, useEffect, useContext } from "react";
import useCreateUser from "../../../helpers/hooks/useCreateUser";
import DataContect from "../../../helpers/DataContect";
import TabsContext from "../../../helpers/TabsContect";
import RegisterBasic from "../../Basic/Register/Register";
// import { messages } from "../../../config/config";
import { useAppState } from "../../../state/app-state";


const Register = () => {
  const [newUser, setNewUser] = useState(null);
  const [isRedirect, setIsRedirect] = useState(false);
  const [state, dispatch] = useAppState();

  const dataContext = useContext(DataContect);


  const {setActiveIndex} = useContext(TabsContext);
  
  const [serverAnswer] = useCreateUser(newUser);

  // TODO message hook
  useEffect(() => {
    if (serverAnswer) {
      // dataContext.setProcessing(false);  
      //global
      dispatch({type: "END_PROCESSING"})
      if (serverAnswer.email) {
        // dataContext.setMessage(messages.U_CREATED);
         //global
      dispatch({type: "NOTIF_USER_REGISTERED"})
        setIsRedirect(true);
      } else {
        // dataContext.setMessage(serverAnswer.serverMessage || messages.UPS);
             //global
      dispatch({type: "NOTIF_USER_REGISTRATION_FAIL", message: serverAnswer.serverMessage})
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
    // dataContext.setMessage(messages.PROCESSING);
    // dataContext.setProcessing(true);
    //global
    dispatch({type: "NOTIF_START_USER_REGISTRATION"})  
  };
  return <RegisterBasic signupHandler={signupHandler} />;
};
export default Register;
