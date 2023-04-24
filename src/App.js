import logo from "./logo.svg";
import "./App.css";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

const App = () => {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1>Hello World!</h1>
				<Authenticator>
					{({ signOut, user }) => (
						<main>
							<h1>Profile</h1>
							<h2>Username: {user.username}</h2>
							<h3>Email: {user.email}</h3>
							<button onClick={signOut}>Sign out</button>
						</main>
					)}
				</Authenticator>
			</header>
		</div>
	);
};
export default App;
