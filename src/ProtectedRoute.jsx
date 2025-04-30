import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated, children }) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;

// #This component checks if the user is authenticated. If they are, it renders the children components. If not, it redirects them to the login page.
// #For example, you can use this component to protect certain routes in your application, ensuring that only authenticated, signed-in users can access them.
{
  /**
    //#use it in AppRoutes.jsx
    import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated, children }) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
     */
}
