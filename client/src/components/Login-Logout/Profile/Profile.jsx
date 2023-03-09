import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "./Profile.module.css"
export const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div className={styles.containerPerfil}>
          <img src={user.picture} alt={user.name} />
          <h5>{user.name}</h5>
          <strong>{user.email}</strong>
      </div>
    )
  );
};
