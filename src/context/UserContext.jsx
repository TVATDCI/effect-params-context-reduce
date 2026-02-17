import { createContext, useReducer } from "react";
import PropTypes from "prop-types";

import userReducer from "../reducers/userReducer";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const initialState = {
    users: [],
    selectedUser: null,
    loading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { UserContext, UserProvider };
