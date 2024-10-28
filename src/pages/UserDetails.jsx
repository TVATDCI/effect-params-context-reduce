import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../context/UserContext";

import UserProfile from "../components/UserProfile";

const UserDetails = () => {
    const { id } = useParams();
    const { state, dispatch } = useContext(UserContext);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(
                    `https://jsonplaceholder.typicode.com/users/${id}`,
                );
                dispatch({ type: "SET_SELECTED_USER", payload: response.data });
            } catch (error) {
                console.log(error);
            }
        };
        fetchUser();
    }, [id, dispatch]);

    return (
        <div className="outlet">
            <UserProfile />
        </div>
    );
};

export default UserDetails;