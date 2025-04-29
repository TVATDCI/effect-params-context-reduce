import spaceCharter from "./assets/spacecharter.svg";
import AppRoutes from "./AppRoutes";

import { BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from "./context/UserContext";

import "./App.css";

const App = () => {
  return (
    <UserProvider>
      <div>
        <a href="https://github.com/TVATDCI" target="_blank">
          <img src={spaceCharter} className="logo" alt="Header logo" />
        </a>
        <p>
          The spinning Charter will be coming with every page that this App
          routed to. As it is also wrapped up with in UserProvider!
        </p>
      </div>
      <Router>
        <AppRoutes />
      </Router>
    </UserProvider>
  );
};

export default App;
