import React, { useState } from "react";

// import styles from "./styles.module.scss";

function Signup() {
  const signupHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    console.log(formProps);
  };
  const [visible, setViisible] = useState(false);
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
}
export default Signup;
