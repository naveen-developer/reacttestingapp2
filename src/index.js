import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./Profile";
import Appheader from "./Appheader";
import Createpost from "./Createpost";
import Signup from "./Signup";
import Signin from "./Signin";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/signup" element={<Signup />} />

        <Route exact path="/signin" element={<Signin />} />

        <Route
          exact
          path="/"
          element={
            <>
              <Appheader />
              <App />
            </>
          }
        />

        <Route
          exact
          path="/profile"
          element={
            <>
              <Appheader />
              <Profile />
            </>
          }
        />

        <Route
          exact
          path="/createpost"
          element={
            <>
              <Appheader />
              <Createpost />
            </>
          }
        />
      </Routes>
    </Router>
  </React.StrictMode>
);
