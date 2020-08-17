import React, { FormEvent, useRef, useState } from 'react';
import MessageInput from '../MessageInput/MessageInput.component';

interface Props {
	username: string;
}

const Chat = ({ username }: Props) => {
	return (
		<div className='chat'>
			<MessageInput username={username} />
		</div>
	);
};

export default Chat;
