import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Appheader from "./Appheader";

const combineComponents = () => {
  return (
    <>
      <Appheader />
      <App />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={combineComponents()} />
      </Routes>
    </Router>
  </React.StrictMode>
);
