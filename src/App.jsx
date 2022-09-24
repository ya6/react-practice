/* eslint-disable linebreak-style */
import { useState, useMemo } from "react";
import Layout from "./components/Custom/Layout/Layout";
import DataContext from "./helpers/DataContect";

const App = () => {
  const [user, setUser] = useState("guest");
  const [message, setMessage] = useState(null);
  const [processing, setProcessing] = useState(false);
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
      processing,
      changeProcessing: (bool) => {
        setProcessing(bool);
      },
    }),
    [user, message, processing],
  );
  return (
    <DataContext.Provider value={context}>
      <Layout />
    </DataContext.Provider>
  );
};
export default App;
