import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { Route, BrowserRouter as Router, useHistory } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Profile from "./Profile";
import { Button } from "@material-ui/core";
import axios from "axios";

function App() {
	// const history = useHistory();
	const [auth, setAuth] = useState(false);

	useEffect(() => {
		axios.get("https://tachoserver.herokuapp.com/users");
	}, []);

	const handleAuth = () => {
		console.log("clicked");
		setAuth((auth) => !auth);
	};
	return (
		<div className="App">
			<Router>
				<Header />
				<Route exact path="/register">
					<SignUp auth={auth} handleAuth={handleAuth} />
				</Route>
				<Route exact path="/login">
					<SignIn auth={auth} handleAuth={handleAuth} />
				</Route>
				<Route exact path="/profile">
					<Profile auth={auth} handleAuth={handleAuth} />
				</Route>
				<Route exact path="/">
					<Home auth={auth} handleAuth={handleAuth} />
				</Route>
			</Router>
		</div>
	);
}

export default App;
