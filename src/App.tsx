import React, { useState } from 'react';
import './App.css';
import Chat from './components/chat/Chat.component';
import Login from './components/login/Login.component';

function App() {
	const [loggedin, setloggedin] = useState(false);
	const [username, setusername] = useState('');
	const loginUser = (username: string) => {
		setusername(username);
		setloggedin(true);
	};
	return <div className='App'>{loggedin ? <Chat username={username} /> : <Login loginUser={loginUser} />}</div>;
}

export default App;
