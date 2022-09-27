/* eslint-disable linebreak-style */
import { useState, useEffect, useMemo } from "react";
import Layout from "./components/Custom/Layout/Layout";
import DataContext from "./helpers/DataContect";
import { useNavigate } from "react-router-dom";
import { route, GUEST_NAME, messages } from "./config/config";
import StorageService from "./services/StorageService";

const App = () => {
  const [user, setUser] = useState(GUEST_NAME);
  const [isAuth, setIsAuth] = useState(false);
  const [message, setMessage] = useState(null);
  const [processing, setProcessing] = useState(false);
  const navigate = useNavigate();

  const context = useMemo(
    () => ({
      user,
      setUser,

       isAuth,
       setIsAuth,

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
      isAuth,
      message,
      processing,
      //  group, page, pageOfWords
    ]
  );

  useEffect(() => {
    navigate(route.TEXTBOOK);
    const user = StorageService.loadSavedUser()
    if (user) {
     setIsAuth(true);
     setUser(user.name)
     setMessage(messages.W_BACK)

    }
  }, []);

  return (
    <DataContext.Provider value={context}>
      <Layout />
    </DataContext.Provider>
  );
};
export default App;
