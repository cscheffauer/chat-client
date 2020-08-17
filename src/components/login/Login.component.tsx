import React, { FormEvent, useState } from 'react';

interface Props {
	loginUser: (username: string) => void;
}

const Login = ({ loginUser }: Props) => {
	const [username, setusername] = useState('');

	const changeUsername = (event: FormEvent<HTMLInputElement>) => {
		event.preventDefault();
		setusername(event.currentTarget.value);
	};

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		if (username.length > 0) loginUser(username); //check if username is larger than 0 characters - to avoid empty usernames in chat
	};
	return (
		<div className='login'>
			<form onSubmit={handleSubmit}>
				<input onChange={changeUsername}></input>
				<button type='submit'>Join</button>
			</form>
		</div>
	);
};

export default Login;
