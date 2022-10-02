import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import About from "./pages/About/About";
import Signin from "./pages/Signin/Signin";
import TextBook from "./pages/TextBook/TextBook";
import Statistics from "./pages/Statistics/Statistics";
import { route } from "./config/config";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path={route.TEXTBOOK} element={<TextBook />} />
          <Route path={route.STATISTICS} element={<Statistics />} />
          <Route path={route.ABOUT} element={<About />} />
          <Route path={route.SIGNIN} element={<Signin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
