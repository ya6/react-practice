/* eslint-disable linebreak-style */
import React, { useState, useMemo } from "react";
import Layout from "./components/Layout/Layout";
import UserContext from "./helpers/UserContect";

const App = () => {
  const [user, setUser] = useState("Guest1");
  const context = useMemo(() => ({
    name: user,
    channgeUser: (newUser) => { setUser(newUser); },
  }), [user]);
  return (
    <UserContext.Provider value={context}>
      <Layout />
    </UserContext.Provider>
  );
};
export default App;
