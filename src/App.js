import { useState } from "react";

function App() {
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const [usernameInputFocus, setUsernameInputFocus] = useState("")
	const [passwordInputFocus, setPasswordInputFocus] = useState("")


	const handleUsernameInputFocus = e => {
		setUsernameInputFocus("focus")
	}
	const handleUsernameInputBlur = e => {
		if (username === "") {
			setUsernameInputFocus("")
		}
	}


	const handlePasswordInputFocus = e => {
		setPasswordInputFocus("focus")
	}
	const handlePasswordInputBlur = e => {
		if (password === "") {
			setPasswordInputFocus("")
		}
	}

	return (
		<div className="login-page">
			<form className="login-form">
				<h1>Login</h1>
				<div className="textb">
					<input type="text" name="username"
						onFocus={handleUsernameInputFocus}
						onBlur={handleUsernameInputBlur}
						onChange={e => setUsername(e.target.value)}
						value={username}
						className={`${usernameInputFocus}`}
						autoComplete="off"
					></input>
					<span className="input-label">Username</span>
					<span className="input-underline"></span>
				</div>
				<div className="textb">
					<input type="password" name="password"
						onFocus={handlePasswordInputFocus}
						onBlur={handlePasswordInputBlur}
						onChange={e => setPassword(e.target.value)}
						value={password}
						className={`${passwordInputFocus}`}
					></input>
					<span className="input-label">Password</span>
					<span className="input-underline"></span>
				</div>
				<button onClick={e => e.preventDefault()}>Login</button>
				<div className="bottom-text">
					Don't have an account? <a href="/Signup">Sign up</a>
				</div>
			</form>
		</div>
	);
}

export default App;
