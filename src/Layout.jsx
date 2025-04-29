import React from "react";
import spaceCharter from "./assets/spacecharter.svg";

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <a href="https://github.com/TVATDCI" target="_blank" rel="noreferrer">
          <img src={spaceCharter} className="logo" alt="Company Logo" />
        </a>
        <h1>Company Header</h1>
        <p className="p-header">
          The spinning Charter will be coming with every page that this App
          routed to. As it is also wrapped up with in UserProvider!
        </p>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
