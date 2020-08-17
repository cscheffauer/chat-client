import React, { FormEvent, useRef, useState } from 'react';

interface Props {
	username: string;
}

const MessageInput = ({ username }: Props) => {
	const [message, setmessage] = useState('');
	const messageRef = useRef<HTMLInputElement>(null); //ref for messageRef

	const sendNewMessage = async (message: string) => {
		const rawResponse = await fetch('https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				token: '2v87a8V1ECW7',
			},
			body: JSON.stringify({ author: username, message: message }),
		});
		const content = await rawResponse.json();
		console.log(content);
	};
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
		<div className='messageinput'>
			<form onSubmit={handleSubmit}>
				<input ref={messageRef} placeholder={'Type your message here'} onChange={handleChange} value={message} type='text'></input>
			</form>
		</div>
	);
};

export default MessageInput;
