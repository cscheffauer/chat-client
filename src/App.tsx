import React, { useState } from 'react';
import './App.scss';
import Chat from './components/Chat/Chat.component';
import Login from './components/Login/Login.component';

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
