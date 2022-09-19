/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";

const styles = {};
styles.label = {
  display: "flex", width: "90%", justifyContent: "space-between", border: "1px solid lightgray", margin: "0.5rem",
};
styles.block = { display: "block" };
function Login() {
  return (
    <div>
      <form>
        <fieldset>
          <legend>Login</legend>
          <label style={styles.label} htmlFor="">
            name
            <input name="name" type="text" />
          </label>
          <label style={styles.label} htmlFor="">
            password
            <input name="password" type="text" />
          </label>
          <button style={styles.block} type="submit">login</button>
        </fieldset>
      </form>
    </div>
  );
}
export default Login;
