import { useEffect, useContext, useCallback } from "react";

import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import ErrorMessage from "./common/ErrorMessage";
import Loading from "./common/Loading";
import userService from "../services/userService";

const UserList = () => {
  const { state, dispatch } = useContext(UserContext);

  const fetchUsers = useCallback(async () => {
    dispatch({ type: "SET_LOADING", payload: true });
    try {
      const users = await userService.getAllUsers();
      dispatch({ type: "SET_USERS", payload: users });
    } catch (error) {
      dispatch({
        type: "SET_ERROR",
        payload: error.message || "Failed to fetch users",
      });
    }
  }, [dispatch]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  if (state.loading) {
    return <Loading />;
  }

  if (state.error) {
    return <ErrorMessage message={state.error} onRetry={fetchUsers} />;
  }

  return (
    <div className="bg-surface rounded-lg p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-primary mb-4">User List</h2>
      <p className="text-text-muted mb-6 text-sm">
        The user list and details are coming from{" "}
        <a
          href="https://jsonplaceholder.typicode.com/users"
          target="_blank"
          rel="noreferrer"
          className="text-secondary hover:underline font-semibold"
        >
          typicode.com
        </a>{" "}
        API. Click a user name to see details.
      </p>
      <ul className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
        {state.users.map((user) => (
          <li key={user.id}>
            <Link
              to={`/users/${user.id}`}
              className="block bg-background hover:bg-gray-700 p-3 rounded transition-colors text-secondary hover:text-white"
            >
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
