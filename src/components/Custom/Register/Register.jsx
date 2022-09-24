import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import useCreateUser from "../../../helpers/hooks/useCreateUser";
import DataContect from "../../../helpers/DataContect";
import RegisterBasic from "../../Basic/Register/Register";
import { route } from "../../../config/config";

const Register = () => {
  const [newUser, setNewUser] = useState(null);
  const [isRedirect, setIsRedirect] = useState(false);

  const dataContext = useContext(DataContect);
  const navigate = useNavigate();

  const [serverAnswer] = useCreateUser(newUser);

  // TODO message hook
  useEffect(() => {
    if (serverAnswer) {
    
      if (serverAnswer.email) {
        dataContext.changeMessage("user created");
        setIsRedirect(true);
      } else {
        dataContext.changeMessage(serverAnswer.serverMessage || "ups");
      }
    }
  }, [serverAnswer]);

  useEffect(() => {
    if (isRedirect) {
      navigate("/signin");
    }
  }, [isRedirect]);

  const signupHandler = (values) => {
    setNewUser(values);
    dataContext.changeMessage("processing...");
  };
  return <RegisterBasic signupHandler={signupHandler} />;
};
export default Register;
