const userReducer = (state, action) => {
    switch (action.type) {
      case "SET_USERS":
        return {
          ...state,
          users: action.payload,
        };
      case "SET_SELECTED_USER":
        return {
          ...state,
          selectedUser: action.payload,
        };
      default:
        state;
    }
  };
  
  export default userReducer;