import PropTypes from "prop-types";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import grad_glob from "./assets/grad_glob.png";

const Layout = ({ children }) => {
  const { isAuthenticated, user, logout } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-background text-text">
      <header className="bg-surface py-6 px-4 text-center">
        <a
          href="https://github.com/TVATDCI"
          target="_blank"
          rel="noreferrer"
          className="inline-block"
        >
          <img
            src={grad_glob}
            className="h-24 w-24 mx-auto animate-spin-slow"
            alt="Company Logo"
          />
        </a>
        <h1 className="text-4xl font-black text-primary mt-4">
          Company Header
        </h1>
        <p className="text-text-muted italic mt-2 max-w-2xl mx-auto">
          The spinning Charter will be coming with every page that this App
          routed to. As it is also wrapped up with in UserProvider!
        </p>
        <div className="mt-4 flex justify-center gap-4 items-center">
          {isAuthenticated ? (
            <>
              <span className="text-text-muted text-sm">
                Welcome, {user?.username}
              </span>
              <button
                onClick={logout}
                className="bg-surface hover:bg-gray-700 text-text border border-gray-600 font-bold py-1 px-4 rounded transition-colors text-sm"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="bg-primary hover:bg-orange-600 text-white font-bold py-1 px-4 rounded transition-colors text-sm"
            >
              Login
            </Link>
          )}
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">{children}</main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
