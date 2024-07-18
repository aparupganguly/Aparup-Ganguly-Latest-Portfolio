import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import TechIknow from "./Pages/TechIknow";
import ErrorPage from "./Pages/ErrorPage";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router basename="/">
    <Routes>
      <Route path="/" element={<App />} />
      <Route exact path="/tech" element={<TechIknow />} />
      <Route exact path="*" element={<ErrorPage />} />
    </Routes>
  </Router>
);
