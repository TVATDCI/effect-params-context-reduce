import { useEffect, useContext } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const UserList = () => {
  const { state, dispatch } = useContext(UserContext);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        dispatch({ type: "SET_USERS", payload: response.data });
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, [dispatch]);

  return (
    <div className="outlet">
      <h2>User List</h2>
      <p>
        Take a look at the comment inside, below the component, for more info!
        <br />
        <br />
        The user user list and details are coming from{" "}
        <a
          href="https://jsonplaceholder.typicode.com/users"
          target="_blank"
          rel="noreferrer"
          style={{
            textDecoration: "none",
            color: "#007bff",
            fontWeight: "bold",
          }}
        >
          typicode.com
        </a>{" "}
        API.
      </p>
      <ul>
        {state.users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;

/** UserList
 * 1. useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(
                    "API_URL",
                );
                dispatch({ type: "SET_USERS", payload: response.data });
            } catch (error) {
                console.log(error);
            }
        };
        fetchUsers();
    }, [dispatch]);

    a. Create a UserList component.
    b. Import the useEffect and useContext hooks from React.
    c. Import the axios module.
    d. Import the Link component from react-router-dom.
    e. Import the UserContext from the UserContext file.
    f. Create a UserList component.
    g. Destructure the state and dispatch from the UserContext.
    h. Create a useEffect hook.
    i. Create a fetchUsers function.
    j. Try to fetch the users from the API.
    k. Dispatch an action to set the users in the state.
    l. Catch any errors and log them to the console.
    m. Call the fetchUsers function.
    n. Add the dispatch function to the dependency array.
    o. Return the JSX for the UserList component.
    r. Map over the users in the state.
    s. Return a list item with a key of user.id.
    t. Add a Link component with the to prop set to /users/${user.id}.
    u. Add the user.name as the text content of the Link component.
    v. Now the data is fetched and displayed in the UserList component. Click the link, the path is set to /users/${user.id}. 
 */
