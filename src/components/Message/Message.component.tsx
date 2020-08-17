import React from 'react';
import { MessageType } from '../Chat/Chat.component';
interface Props {
	username: string;
	message: MessageType;
}

const Message = ({ username, message }: Props) => {
	const ts = new Date(message.timestamp);
	const formatedTimestamp = ts.getDate() + ' ' + ts.toLocaleString('default', { month: 'short' }) + ' ' + ts.getFullYear() + ' ' + ts.getHours() + ':' + ts.getMinutes();
	return (
		<div className='messageLine'>
			{username !== message.author ? (
				<div className='message'>
					<span className='author'>{message.author}</span>
					<span className='text'>{message.message}</span>
					<span className='ts'>{formatedTimestamp}</span>
				</div>
			) : (
				<div className='message own'>
					<span className='text'>{message.message}</span>
					<span className='ts'>{formatedTimestamp}</span>
				</div>
			)}
		</div>
	);
};

export default Message;
