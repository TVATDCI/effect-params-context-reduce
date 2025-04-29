import AppRoutes from "./AppRoutes";

import { BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from "./context/UserContext";

import "./App.css";

const App = () => {
  return (
    <UserProvider>
      <AppRoutes />
    </UserProvider>
  );
};

export default App;
