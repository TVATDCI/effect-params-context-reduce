import PropTypes from "prop-types";
import grad_glob from "./assets/grad_glob.png";

const Layout = ({ children }) => {
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
      </header>
      <main className="container mx-auto px-4 py-8">{children}</main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
