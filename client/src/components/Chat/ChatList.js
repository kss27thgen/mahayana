import React, { useEffect, useContext, useState } from "react";
import io from "socket.io-client";
import Loader from "../Loader";
import ChatItem from "./ChatItem";
import { UserContext } from "../App";
import ChatForm from "./ChatForm";
import { Link } from "react-router-dom";
import ScrollToBottom from "react-scroll-to-bottom";

let socket;

const URI = "localhost:9000";

const ChatList = (props) => {
	const { userInfo } = useContext(UserContext);

	const [room, setRoom] = useState("");
	const [users, setUsers] = useState([]);
	const [messages, setMessages] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		socket = io(URI);
		if (userInfo.username === undefined) {
			props.history.push("/");
		}
		socket.emit("joinRoom", userInfo);
	}, [props.history, userInfo]);

	useEffect(() => {
		socket.on("message", (message) => {
			setMessages([...messages, message]);
			setLoading(false);
		});

		socket.on("roomUsers", (res) => {
			setRoom(res.room);
			setUsers(res.users);
		});
	}, [messages]);

	return loading || messages.length < 1 ? (
		<Loader />
	) : (
		<div className="chat">
			<div>
				<a href="/">
					<button className="button bg-green m-1">Back</button>
				</a>
			</div>

			<div className="chat-list-wrapper">
				<div className="chat-header mb-1">
					<p className="button bg-gray">{room}</p>
					<div className="chat-header-users">
						{users.map((user, i) => (
							<p className="chat-header-username" key={i}>
								{user.username}
							</p>
						))}
					</div>
				</div>
				<ScrollToBottom className="chat-list-box">
					<div className="chat-list">
						{messages.map((message, index) => (
							<ChatItem
								key={index}
								message={message}
								mine={
									userInfo.username === message.username
										? "mine"
										: "others"
								}
							/>
						))}
					</div>
				</ScrollToBottom>
			</div>
			<ChatForm socket={socket} />
		</div>
	);
};

export default ChatList;
