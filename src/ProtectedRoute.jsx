import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const ProtectedRoute = ({ isAuthenticated, children }) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};

ProtectedRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
