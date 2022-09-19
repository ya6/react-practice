import React, { useState } from "react";

const styles = {};
styles.label = {
  display: "flex",
  width: "90%",
  justifyContent: "space-between",
  border: "1px solid lightgray",
  margin: "0.5rem",
};
styles.block = { display: "block" };
function Signup() {
  const [visible, setViisible] = useState(false);
  return (
    <div>
      <form>
        <fieldset>
          <legend>Signup</legend>
          <label style={styles.label}>
            name
            <input name="name" type="text" />
          </label>
          <label style={styles.label} htmlFor="">
            password
            <input name="password" type={visible ? "text" : "password"} />
          </label>
          <label>
            <input
              onChange={() => {
                setViisible(!visible);
              }}
              type="checkbox"
            />
            see password
          </label>
          <button style={styles.block} type="submit">
            signup
          </button>
        </fieldset>
      </form>
    </div>
  );
}
export default Signup;
