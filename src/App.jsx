/* eslint-disable linebreak-style */
import { useState, useEffect, useMemo } from "react";
import Layout from "./components/Custom/Layout/Layout";
import { useNavigate } from "react-router-dom";
import { route, GUEST_NAME, messages } from "./config/config";
import StorageService from "./services/StorageService";

import { AppStateProvider, useAppState } from "./state/app-state";
import appStateReducer from "./state/appStateReducer";
import initialAppState from "./state/initialAppState";

const App = () => {
  const [state, dispatch] = useAppState();
 
  const navigate = useNavigate();


  useEffect(() => {
    navigate(route.TEXTBOOK);
    const user = StorageService.loadSavedUser()
    if (user) {
    //  setIsAuth(true);
    //  setUser(user.name)
    //  setMessage(messages.W_BACK)
    dispatch({type: "AUTH_FROM_STORAGE"})


    }
  }, []);

  return (
  
      <Layout />
   
  );
};

export default () => (
  <AppStateProvider reducer={appStateReducer} initialState={initialAppState}>
    <App />
  </AppStateProvider>
);
