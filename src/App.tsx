import React, { useState } from 'react';
import './App.css';
import Chat from './components/chat/Chat.component';
import Login from './components/login/Login.component';

function App() {
	const [loggedin, setloggedin] = useState(false);
	const loginUser = () => {
		setloggedin(true);
	};
	return <div className='App'>{loggedin ? <Chat /> : <Login loginUser={loginUser} />}</div>;
}

export default App;
