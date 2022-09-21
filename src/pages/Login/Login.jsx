import { useState, useEffect } from "react";
import useLoginUser from "../../helpers/hooks/useLoginUser";

const Login = () => {
  const [visible, setViisible] = useState(false);
  const [credentials, setCredentials] = useState(null);
  const [serverAnswer] = useLoginUser(credentials);
  const [message, setMessage] = useState(null);

  // message hook
  useEffect(() => {
    if (serverAnswer) {
      setMessage(serverAnswer);
      console.log(message);
    }
  }, [serverAnswer, message]);

  const loginHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    console.log(formProps);
    setCredentials(formProps);
  };

  return (
    <div>
      <form onSubmit={loginHandler}>
        <fieldset>
          <legend>Login</legend>
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
          <button type="submit">login</button>
        </fieldset>
      </form>
    </div>
  );
};
export default Login;
