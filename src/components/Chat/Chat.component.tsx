import React, { useRef, useState, useEffect } from 'react';
import Message from '../Message/Message.component';
import MessageInput from '../MessageInput/MessageInput.component';

import './Chat.styles.scss';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner.component';

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
	const [fetched, setfetched] = useState(false);
	const messageRef = useRef<HTMLInputElement>(null); //ref for messageRef
	const scrollArea = useRef<HTMLDivElement>(null); //ref for scrollArea

	const Messages = () => (
		<>
			{messages.map((message: MessageType) => (
				<Message key={message._id} username={username} message={message} />
			))}
		</>
	);

	useEffect(() => {
		fetchAllMessages(true);
	}, []);

	const setScrollAndFocus = () => {
		if (messageRef.current !== null) {
			messageRef.current.focus(); //focus on the messageRef after messages changed
		}
		if (scrollArea.current !== null) {
			scrollArea.current.scrollTop = scrollArea.current.scrollHeight; //to scroll to the bottom after messages changed
		}
	};

	const fetchAllMessages = async (showLoadingIndicator: boolean) => {
		showLoadingIndicator && setfetched(false);
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
		setfetched(true);
		setScrollAndFocus();
	};

	return (
		<div className='chat'>
			<div ref={scrollArea} className='messagesWrapper'>
				{fetched ? <Messages /> : <LoadingSpinner />}
			</div>
			<div className='messageInputWrapper'>
				<MessageInput username={username} fetchAllMessages={fetchAllMessages} messageRef={messageRef} />
			</div>
		</div>
	);
};

export default Chat;
