import React, { useState } from "react";

const ChatForm = ({ socket }) => {
	const [text, setText] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		socket.emit("chatMessage", text);
		setText("");
	};

	return (
		<form className="chat-form" onSubmit={handleSubmit}>
			<input
				type="text"
				name="text"
				value={text}
				onChange={(e) => setText(e.target.value)}
				placeholder="Type something.."
				className="chat-form-input"
			/>
		</form>
	);
};

export default ChatForm;
