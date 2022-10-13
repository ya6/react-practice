/* eslint-disable linebreak-style */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { route } from "./config/config";

import Layout from "./components/MUI/Custom/Layout/Layout";

import { AppStateProvider } from "./state/app-state";
import appStateReducer from "./state/appStateReducer";
import initialAppState from "./state/initialAppState";
import useUserWords from "./helpers/hooks/useUserWords";
import useAuthFromStorage from "./helpers/hooks/useAuthFromStorage";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(route.TEXTBOOK);
  }, []);

  useAuthFromStorage();
  // useUserWords();

  return <Layout />;
};

export default () => (
  <AppStateProvider reducer={appStateReducer} initialState={initialAppState}>
    <App />
  </AppStateProvider>
);
