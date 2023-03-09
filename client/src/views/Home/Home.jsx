import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
import Cities from "../../components/Cities/Cities";

import { useAuth0 } from "@auth0/auth0-react";
import { getCities } from "../../redux/actions";
import style from "./Home.module.css";
import NavBar from "../../components/NavBar/NavBar";
import { LogoutButton } from "../../components/Login-Logout/Logout/LogoutButton";
import { LoginButton } from "../../components/Login-Logout/Login/LoginButton";
import { Profile } from "../../components/Login-Logout/Profile/Profile";

const Home = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    dispatch(getCities());
  }, [dispatch]);

  if(isLoading) return <h1>Loading...</h1>

  return (
    <div className={style.homeContainer}>

      <NavBar />

      <div className={style.homeContainerWelcome}>

        <div className={style.homeWelcome}>

          <h1>Bienvenido</h1>
          {
            isAuthenticated ? <LogoutButton /> : <LoginButton />
          }

          <Profile />
        </div>

      </div>

      <div className={style.homeCardContainer}>

        <Cities />

      </div>
    </div>
  );
};

export default Home;
