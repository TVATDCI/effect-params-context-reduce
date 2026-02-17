import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const UserProfile = () => {
  const { state } = useContext(UserContext);
  const user = state.selectedUser;

  if (!user) return <p className="text-text-muted">No user selected</p>;

  return (
    <div className="bg-surface rounded-lg p-6 shadow-lg max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-primary mb-4">
        {`${user.name}'s Profile`}
      </h2>
      <div className="space-y-3">
        <p className="text-text">
          <span className="font-semibold text-text-muted">Email:</span>{" "}
          <a
            href={`mailto:${user.email}`}
            className="text-secondary hover:underline"
          >
            {user.email}
          </a>
        </p>
        <p className="text-text">
          <span className="font-semibold text-text-muted">Phone:</span>{" "}
          {user.phone}
        </p>
        <p className="text-text">
          <span className="font-semibold text-text-muted">Website:</span>{" "}
          <a
            href={`https://${user.website}`}
            target="_blank"
            rel="noreferrer"
            className="text-secondary hover:underline"
          >
            {user.website}
          </a>
        </p>
        <p className="text-text">
          <span className="font-semibold text-text-muted">Company:</span>{" "}
          {user.company.name}
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
