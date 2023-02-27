import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Cities from "../../components/Cities/Cities";
import { LoginButton } from "../../components/Login-Logout/Login/LoginButton";
import { LogoutButton } from "../../components/Login-Logout/Logout/LogoutButton";
import { Profile } from "../../components/Login-Logout/Profile/Profile";
import { getCities } from "../../redux/actions";
import style from "./Home.module.css";
import { useAuth0 } from "@auth0/auth0-react";
const Home = () => {
	const dispatch = useDispatch();
	const { isAuthenticated } = useAuth0();
	useEffect(() => {
		dispatch(getCities());
	});

	return (
		<div className={style.homeContainer}>
			<div className={style.homeContainerWelcome}>
				<div className={style.homeWelcome}>
					{/* <h1>¡Bienvenido!</h1>
					<p>Encuentra el lugar perfecto para pasar tus vacaciones!</p> */}
					{isAuthenticated ? (
						<>
					<h1>¡Bienvenido!</h1>
							<Profile />
					<p>Encuentra el lugar perfecto para pasar tus vacaciones!</p>
							<div>
								{" "}
								<LogoutButton />{" "}
							</div>
						</>
					) : (
						<div>
							{" "}
					<h1>¡Bienvenido!</h1>
					<p>Encuentra el lugar perfecto para pasar tus vacaciones!</p>
							<LoginButton />{" "}
						</div>
					)}
					<br />
				</div>
			</div>
			<div className={style.homeCardContainer}>
				<Cities />
			</div>
		</div>
	);
};

export default Home;
