import React, { FormEvent, useState } from 'react';

interface Props {
	username: string;
	fetchAllMessages: (showLoadingIndicator: boolean) => void;
	messageRef: React.RefObject<HTMLInputElement>;
}

const MessageInput = ({ username, fetchAllMessages, messageRef }: Props) => {
	const [message, setmessage] = useState('');

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
		if (content.author === username) fetchAllMessages(false);
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
		<form onSubmit={handleSubmit}>
			<input ref={messageRef} placeholder={'Message'} onChange={handleChange} value={message} type='text'></input>
			<button type='submit'>Send</button>
		</form>
	);
};

export default MessageInput;
