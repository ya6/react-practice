import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import useCreateUser from "../../helpers/hooks/useCreateUser";
import DataContect from "../../helpers/DataContect";

const Signup = () => {
  const [visible, setViisible] = useState(false);
  const [newUser, setNewUser] = useState(null);
  const [isRedirect, setIsRedirect] = useState(false);

  const dataContext = useContext(DataContect);
  const navigate = useNavigate();

  const [serverAnswer] = useCreateUser(newUser);

  // message hook
  useEffect(
    () => {
      if (serverAnswer) {
        if (serverAnswer.name) {
          dataContext.changeMessage("user created");
          setIsRedirect(true);
        } else {
          dataContext.changeMessage(serverAnswer.serverMessage || "ups");
        }
      }
    },
    [serverAnswer],
  );

  useEffect(() => {
    if (isRedirect) {
      navigate("/login");
    }
  }, [isRedirect]);

  const signupHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    setNewUser(formProps);
    dataContext.changeMessage("processing...");
  };
  return (
    <div>
      <form onSubmit={signupHandler}>
        <fieldset>
          <legend>Signup</legend>
          <div>
            name
            <input name="name" type="text" />
          </div>
          <div>
            email
            <input name="email" type="email" />
          </div>
          <div>
            password
            <input name="password" type={visible ? "text" : "password"} />
          </div>
          <div>
            <input
              onChange={() => {
                setViisible(!visible);
              }}
              type="checkbox"
            />
            see password
          </div>
          <button type="submit">
            signup
          </button>
        </fieldset>
      </form>
    </div>
  );
};
export default Signup;
