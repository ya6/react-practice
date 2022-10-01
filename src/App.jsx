/* eslint-disable linebreak-style */
import { useState, useEffect, useMemo } from "react";
import Layout from "./components/Custom/Layout/Layout";
import DataContext from "./helpers/DataContect";
import { useNavigate } from "react-router-dom";
import { route, GUEST_NAME, messages } from "./config/config";
import StorageService from "./services/StorageService";

import { AppStateProvider } from "./state/app-state";
import appStateReducer from './state/appStateReducer';
import initialAppState from "./state/initialAppState";

const App = () => {
  const [user, setUser] = useState(GUEST_NAME);
  const [userData, setUserData] = useState(GUEST_NAME);
  const [isAuth, setIsAuth] = useState(false);
  const [message, setMessage] = useState(null);
  const [processing, setProcessing] = useState(false);
  const navigate = useNavigate();
   const context = useMemo(
    () => ({
      user,
      setUser,

      userData,
      setUserData,
    
      isAuth,
      setIsAuth,

      message,
      setMessage,

      processing,
      setProcessing,
     

    }),
    [user, isAuth, message, processing]
  );

 
  useEffect(() => {
    navigate(route.TEXTBOOK);
    const user = StorageService.loadSavedUser();
    if (user) {
      setIsAuth(true);
      setUser(user.name);
      setMessage(messages.W_BACK);
    }
  }, []);

  return (
  
    <DataContext.Provider value={context}>
      <Layout />
    </DataContext.Provider>
  )
      
};
export default () => (
  <AppStateProvider reducer={appStateReducer} initialState={initialAppState} >
    <App />
  </AppStateProvider>
)

