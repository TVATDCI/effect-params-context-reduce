import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const UserProfile = () => {
    const { state } = useContext(UserContext);
    const user = state.selectedUser;

    if (!user) return <p>No user selected</p>;
    console.log(user);

    return (
        <div className="outlet">
            <h2>{user.name}`s Profile</h2>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
            <p>Company: {user.company.name}</p>
        </div>
    );
};

export default UserProfile; //exporting UserProfile component