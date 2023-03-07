import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Cities from "../../components/Cities/Cities";
import style from "./Login.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import NavBar from "../../components/NavBar/NavBar";
import Landing from "../Landing/Landing";


const Login = () => {
	const dispatch = useDispatch();
	const { Authorization } = useAuth0();


	return (
		<div>aquí en Login</div>

	);
};

export default Login;
