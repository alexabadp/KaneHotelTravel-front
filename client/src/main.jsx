import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Auth0Provider } from "@auth0/auth0-react";

import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<Auth0Provider
				domain="dev-szfhqw2qb6p8ysgm.us.auth0.com"
				clientId="N6litO2vjdt4aA7lhK1l91QU0x9m4r9d"
				redirectUri={window.location.origin}
				audience="https://backend-kanehoteltravel-production.up.railway.app/"
				scope= "openid profile email"
				>
				<Provider store={store}>
					<App />
				</Provider>
			</Auth0Provider>
		</BrowserRouter>
	</React.StrictMode>
);
