/* eslint-disable linebreak-style */
import { useState, useEffect, useMemo } from "react";
import Layout from "./components/Custom/Layout/Layout";
import DataContext from "./helpers/DataContect";
import { useNavigate } from "react-router-dom";
import { route } from "./config/config";

const App = () => {
  const [user, setUser] = useState("guest");
  const [message, setMessage] = useState(null);
  const [processing, setProcessing] = useState(false);
  const navigate = useNavigate();

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
    [
      user,
      message,
      processing,
      //  group, page, pageOfWords
    ]
  );

  useEffect(() => {
    navigate(route.TEXTBOOK);
  }, []);

  return (
    <DataContext.Provider value={context}>
      <Layout />
    </DataContext.Provider>
  );
};
export default App;
