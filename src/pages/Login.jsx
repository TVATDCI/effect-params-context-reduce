import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Mock authentication - accept any non-empty credentials
    if (username.trim() && password.trim()) {
      login({ username, email: `${username}@example.com` });
      navigate("/");
    } else {
      setError("Please enter username and password");
    }
  };

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="bg-surface rounded-lg p-8 shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-primary mb-6 text-center">
          Login
        </h2>
        <p className="text-text-muted text-sm mb-6 text-center">
          Demo: Enter any username and password to login
        </p>
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block text-text-muted mb-2 text-sm"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-background text-text border border-gray-600 rounded px-4 py-2 focus:outline-none focus:border-primary"
              placeholder="Enter username"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-text-muted mb-2 text-sm"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-background text-text border border-gray-600 rounded px-4 py-2 focus:outline-none focus:border-primary"
              placeholder="Enter password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
