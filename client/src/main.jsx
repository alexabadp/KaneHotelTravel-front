import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Auth0Provider } from '@auth0/auth0-react';

import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<Auth0Provider
				domain="dev-udvo4mrhanlsbnxd.us.auth0.com"
				clientId="88JWZqJBOqxRMWk24kHhAUPDFdG3PWFF"
				authorizationParams={{
					redirect_uri: "https://kane-hotel-travel-front.vercel.app"
				}}
			>
				<Provider store={store}>
					<App />
				</Provider>
			</Auth0Provider>
		</BrowserRouter>
	</React.StrictMode>
);