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
      setUser,

      message,
      setMessage,

      processing,
      setProcessing,

      // group,
      // setGroup,

      // page,
      // setPage,

      // pageOfWords,
      // setPageOfWords

    }),
    [user, message, processing,
      //  group, page, pageOfWords
      ]
  );
  return (
    <DataContext.Provider value={context}>
      <Layout />
    </DataContext.Provider>
  );
};
export default App;
