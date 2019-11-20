import React from 'react';
import './App.css';
import { productsResults, Search } from './components/index';
import { connect } from 'react-redux';

class App extends React.Component {

	render() {
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
}

const mapStateToProps = state => {
	return {
		query: state.query,
		products: state.products,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getProducts: queryBody => {
			dispatch({
				type: 'FILL',
				payload: queryBody,
			});
		},
		clearQuery:()=>{
			dispatch({
				type:'CLEAR',
				payload:{}
			});
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
