import React from 'react';

interface Props {
	username: string;
}

const Chat = ({ username }: Props) => {
	return <div>{username}</div>;
};

export default Chat;
