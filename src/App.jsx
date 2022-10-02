/* eslint-disable linebreak-style */
import { useEffect } from "react";
import Layout from "./components/Custom/Layout/Layout";
import { useNavigate } from "react-router-dom";
import { route } from "./config/config";
import StorageService from "./services/StorageService";

import { AppStateProvider, useAppState } from "./state/app-state";
import appStateReducer from "./state/appStateReducer";
import initialAppState from "./state/initialAppState";

const App = () => {
  const [state, dispatch] = useAppState();

  const navigate = useNavigate();

  useEffect(() => {
    navigate(route.TEXTBOOK);
    const user = StorageService.loadSavedUser();
    if (user) {
          dispatch({ type: "AUTH_FROM_STORAGE", userData: user });
    }
  }, []);

  return <Layout />;
};

export default () => (
  <AppStateProvider reducer={appStateReducer} initialState={initialAppState}>
    <App />
  </AppStateProvider>
);
