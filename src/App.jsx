/* eslint-disable linebreak-style */
import { useEffect } from "react";
import Layout from "./components/Custom/Layout/Layout";
import { useNavigate } from "react-router-dom";
import { route } from "./config/config";

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
  useUserWords();

  return <Layout />;
};

export default () => (
  <AppStateProvider reducer={appStateReducer} initialState={initialAppState}>
    <App />
  </AppStateProvider>
);
