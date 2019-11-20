import React from 'react';
import './App.css';
import { productsResults, Search } from './components/index';
import { connect } from 'react-redux';
import { fetcher } from './fetcher/fetcher';

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
						<Search
							fillQueryProp={this.props.fillQuery}
							clearQueryProp={this.props.clearQuery}
							getProductsProp={this.props.getProducts}
						/>
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
		fillQuery: queryBody => {
			dispatch({
				type: 'FILL',
				payload: queryBody,
			});
		},
		clearQuery: emptyQuery => {
			dispatch({
				type: 'CLEAR',
				payload: emptyQuery,
			});
		},
		getProducts: queryBody => {
			fetcher.post(queryBody).then(data => {
				console.log(data);
			});
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
