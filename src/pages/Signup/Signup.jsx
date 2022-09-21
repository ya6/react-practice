import { useState, useEffect } from "react";
import useCreateUser from "../../helpers/hooks/useCreateUser";
// import styles from "./styles.module.scss";

const Signup = () => {
  const [visible, setViisible] = useState(false);
  const [newUser, setNewUser] = useState(null);
  const [message, setMessage] = useState(null);

  const [serverAnswer] = useCreateUser(newUser);

  // message hook
  useEffect(() => {
    if (serverAnswer) {
      setMessage(serverAnswer);
      console.log(message);
    }
  }, [serverAnswer, message]);

  const signupHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    setNewUser(formProps);
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
