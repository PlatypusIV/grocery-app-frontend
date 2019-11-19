import React from 'react';
import './App.css';
import { productsResults, Search } from './components/index';

function App() {
	return (
		<div className="App">
			<meta name="viewport" content="width=device-width,initial-scale=1.0" />
			<header className="Header">
				<h1>Grocery-app web page!</h1>
			</header>
			<main>
				<div className="SearchDiv">
					<Search />
				</div>
			</main>
			<footer></footer>
		</div>
	);
}

export default App;
