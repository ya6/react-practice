import React from "react";
// import ReactDOM from "react-dom/client";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home/Home";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Dictionary from "./pages/Dictionary/Dictionary";
import Statistics from "./pages/Statistics/Statistics";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="dictionary" element={<Dictionary />} />
          <Route path="statistics" element={<Statistics />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,

);
