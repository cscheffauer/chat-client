import React, { FormEvent, useRef, useState } from 'react';
import MessageInput from '../MessageInput/MessageInput.component';

interface Props {
	username: string;
}

const Chat = ({ username }: Props) => {
	const fetchAllMessages = () => {
		alert('test');
	};
	return (
		<div className='chat'>
			<MessageInput username={username} fetchAllMessages={fetchAllMessages} />
		</div>
	);
};

export default Chat;
