import React from "react";

const ChatItem = ({ message, mine }) => {
	const { username, text, time } = message;
	return (
		<div className={`chat-item ${mine}`}>
			<div className="chat-item-info">
				<p className="chat-item-info-name">{username}</p>
				<p className="chat-item-info-time">({time})</p>
			</div>
			<div className="chat-item-text">{text}</div>
		</div>
	);
};

export default ChatItem;
