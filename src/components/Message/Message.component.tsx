import React from 'react';
import { MessageType } from '../Chat/Chat.component';
interface Props {
	username: string;
	message: MessageType;
}

const Message = ({ username, message }: Props) => {
	return (
		<div className='message'>
			<p>
				{message.author} {message.message} {message.timestamp}
			</p>
		</div>
	);
};

export default Message;
