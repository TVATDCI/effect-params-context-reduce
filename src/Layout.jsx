import React from "react";
import grad_glob from "./assets/grad_glob.png";

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <a href="https://github.com/TVATDCI" target="_blank" rel="noreferrer">
          <img src={grad_glob} className="logo" alt="Company Logo" />
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
