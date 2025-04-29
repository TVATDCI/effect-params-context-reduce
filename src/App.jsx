/* eslint-disable no-unused-vars */
import React from "react";
import spaceCharter from "./assets/spacecharter.svg";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";

import Home from "./pages/Home";
import UserDetails from "./pages/UserDetails";
import NotFound from "./NotFound";

import "./App.css";

const App = () => {
  return (
    <UserProvider>
      <div>
        <a href="https://github.com/TVATDCI" target="_blank">
          <img src={spaceCharter} className="logo" alt="React logo" />
        </a>
        <p>
          The spinning Charter will be coming with every page that this App
          routed to. As it is also wrapped up with in UserProvider!
        </p>
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/:id" element={<UserDetails />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;
