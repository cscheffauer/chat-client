import React, { useState, useEffect } from 'react';
import Message from '../Message/Message.component';
import MessageInput from '../MessageInput/MessageInput.component';

import './Chat.styles.scss';

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

	useEffect(() => {
		fetchAllMessages();
	}, []);

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
			<div className='messagesWrapper'>
				{messages.map((message: MessageType) => (
					<Message key={message._id} username={username} message={message} />
				))}
			</div>
			<div className='messageInputWrapper'>
				<MessageInput username={username} fetchAllMessages={fetchAllMessages} />
			</div>
		</div>
	);
};

export default Chat;
