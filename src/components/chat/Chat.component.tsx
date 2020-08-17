import React, { FormEvent, useRef, useState } from 'react';

interface Props {
	username: string;
}

const Chat = ({ username }: Props) => {
	const [message, setmessage] = useState('');
	const messageRef = useRef<HTMLInputElement>(null); //ref for messageRef

	const sendNewMessage = (message: string) => {};
	const handleSubmit = (event: FormEvent | KeyboardEvent) => {
		event.preventDefault();
		if (message.length > 0) {
			setmessage('');
			sendNewMessage(message); //send new message
		}
	};

	const handleChange = (event: FormEvent<HTMLInputElement>) => {
		event.preventDefault();
		setmessage(event.currentTarget.value);
	};

	return (
		<div className='chat'>
			<form onSubmit={handleSubmit}>
				<input ref={messageRef} placeholder={'Type your message here'} onChange={handleChange} value={message} type='text'></input>
			</form>
		</div>
	);
};

export default Chat;
