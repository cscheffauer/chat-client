import React, { useState } from 'react';
import Message from '../Message/Message.component';
import MessageInput from '../MessageInput/MessageInput.component';

export type MessageType = {
	_id: string;
	message: string;
	author: string;
	timestamp: number;
};

interface Props {
	username: string;
}

const Chat = ({ username }: Props) => {
	const [messages, setmessages] = useState([]);
	const fetchAllMessages = async () => {
		const rawResponse = await fetch('https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0', {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				token: '2v87a8V1ECW7',
			},
		});
		const messagesJson = await rawResponse.json();
		setmessages(messagesJson);
	};
	return (
		<div className='chat'>
			{messages.map((message: MessageType) => (
				<Message key={message._id} username={username} message={message} />
			))}
			<MessageInput username={username} fetchAllMessages={fetchAllMessages} />
		</div>
	);
};

export default Chat;
