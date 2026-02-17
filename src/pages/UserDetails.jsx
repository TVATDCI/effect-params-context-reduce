import { useEffect, useContext, useCallback } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";

import UserProfile from "../components/UserProfile";
import ErrorMessage from "../components/common/ErrorMessage";
import Loading from "../components/common/Loading";
import userService from "../services/userService";

const UserDetails = () => {
  const { id } = useParams();
  const { state, dispatch } = useContext(UserContext);

  const fetchUser = useCallback(async () => {
    dispatch({ type: "SET_LOADING", payload: true });
    try {
      const user = await userService.getUserById(id);
      dispatch({ type: "SET_SELECTED_USER", payload: user });
    } catch (error) {
      dispatch({
        type: "SET_ERROR",
        payload: error.message || "Failed to fetch user details",
      });
    }
  }, [id, dispatch]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  if (state.loading) {
    return <Loading />;
  }

  if (state.error) {
    return <ErrorMessage message={state.error} onRetry={fetchUser} />;
  }

  return (
    <div className="outlet">
      <UserProfile />
    </div>
  );
};

export default UserDetails;
