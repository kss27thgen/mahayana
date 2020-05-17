import React, { useState, createContext, useEffect } from "react";
import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ChatList from "./Chat/ChatList";
import Top from "./Top";

export const UserContext = createContext();

function App() {
	const [userInfo, setUserInfo] = useState({});

	return (
		<BrowserRouter>
			<UserContext.Provider value={{ userInfo, setUserInfo }}>
				<div className="route-container">
					<Switch>
						<Route exact path="/" component={Top} />
						<Route exact path="/chat" component={ChatList} />
					</Switch>
				</div>
			</UserContext.Provider>
		</BrowserRouter>
	);
}

export default App;
