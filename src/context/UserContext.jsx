import { createContext, useReducer } from "react";

import userReducer from "../reducers/userReducer";

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const initialState = {
        users: [],
        selectedUser: null,
    };

    const [state, dispatch] = useReducer(userReducer, initialState);

    return (
        <UserContext.Provider value={{ state, dispatch }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };