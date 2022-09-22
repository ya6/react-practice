/* eslint-disable linebreak-style */
import React, { useState, useMemo } from "react";
import Layout from "./components/Layout/Layout";
import DataContext from "./helpers/DataContect";

const App = () => {
  const [user, setUser] = useState("guest");
  const [message, setMessage] = useState(null);
  console.log("--App-- message-->", message);
  const context = useMemo(
    () => ({
      user,
      changeUser: (newUser) => {
        setUser(newUser);
      },
      message,
      changeMessage: (mess) => {
        setMessage(mess);
      },
    }),
    [user, message],
  );
  return (
    <DataContext.Provider value={context}>
      <Layout />
    </DataContext.Provider>
  );
};
export default App;
