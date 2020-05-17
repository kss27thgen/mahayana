import React, { useState, useContext } from "react";
import { UserContext } from "./App";

const Top = ({ history }) => {
	const { setUserInfo } = useContext(UserContext);
	const [username, setUsername] = useState("");
	const [room, setRoom] = useState("javascript");

	const handleSelect = (e) => {
		setRoom(e.target.value);
	};

	const handleChange = (e) => {
		setUsername(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setUserInfo({ username, room });
		history.push("/chat");
	};

	return (
		<div className="top">
			<form className="top-form" onSubmit={handleSubmit}>
				<input
					className="top-input"
					type="text"
					value={username}
					onChange={handleChange}
					placeholder="your name"
				/>
				<select className="top-select" onChange={handleSelect}>
					<option value="javascript">JavaScript</option>
					<option value="docker">Docker</option>
					<option value="node">Node.js</option>
				</select>
				<button type="submit" className="button top-button bg-green">
					Go
				</button>
			</form>
		</div>
	);
};

export default Top;
