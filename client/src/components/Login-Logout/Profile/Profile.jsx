import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <div>
        <img src={user.picture} alt={user.name} width="32px" border-radius="50%" />
        </div>
        <div>
        <h4>{user.name.split(" ")[0]}</h4>
        </div>
        {/* <p>{user.email}</p> */}
      </div>
    )
  );
};
