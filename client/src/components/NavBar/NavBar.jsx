import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import logo from "../../images/logo.jpg";
import { getCities } from "../../redux/actions";
import { Link } from "react-router-dom";
import { LoginButton } from "../Login-Logout/Login/LoginButton";
import { LogoutButton } from "../Login-Logout/Logout/LogoutButton";
import { Profile } from "../Login-Logout/Profile/Profile";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useAuth0();

  return (
    <div className={styles.navBarContainer}>
      <div className={styles.navBarNavigation}>
        <div className={styles.navBarLogo}>
          <img src={logo} alt="logo" />
          <h2>KANE TRAVELS</h2>
        </div>
        <nav className={styles.navBarUser}>
          <div className={styles.navBarElements}>
            <Link to="/">Publicar Hotel</Link>
          </div>
          <div className={styles.navBarElements}>
            <Link to="/">Publicar Actividad</Link>
          </div>
          <div className={styles.navBarLogin}>
            {isAuthenticated ? (
              <div>
                <div>
                  <LogoutButton />
                </div>
              </div>
            ) : (
              <div>
                <LoginButton />
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
