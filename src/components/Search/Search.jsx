import React from 'react';
import { Button, Container, Row, Column } from 'react-bootstrap';
import './Search.css';

const stores = ['all', 'prisma', 'selver', 'city-alko', 'coop'];
const categories = ['liha', 'puu- ja juurviljad', 'kala'];
const subCategories = []; // temporary need to fill out subCategories list

export default class Search extends React.Component {
	constructor() {
		super();
		this.state = {
			queryObject: { store: '', category: '', subCategory: '', minPrice: '', maxPrice: '' },
		};
	}

	// componentDidUpdate=(prevProps,prevState)=>{
	// 	// if(this.state.queryObject !== prevState.queryObject){
	// 	// 	console.log(this.state.queryObject);
	// 	// }
	// }

	renderList = array => {
		let options = array.map(option => {
			if(option !== 'all'){
				return <option value={option}>{option}</option>;
			}else{
				return <option>{option}</option>;
			}
			
		});

		return options;
	};

	checkIfValidElement = (val, array) => {
		let isValid = true;
		try {
			if (!array.includes(val)) {
				isValid = false;
			}
		} catch (error) {
			console.log(error);
		}
		return isValid;
	};

	changeValue = e => {
		// let newQueryObject = this.state.queryObject;
		switch (e.target.id) {
			case 'storeSelect':
				const newQuery = this.state.queryObject;
				newQuery.store = e.target.value;
				this.setState({
					queryObject: newQuery,
				});
				break;
			case 'categoryInput':
				if (this.checkIfValidElement(e.target.value, categories)) {
					const temp = this.state.queryObject;
					temp.category = e.target.value;
					this.setState({
						queryObject: { ...temp },
					});
				}

				break;
			case 'subCatInput':
				break;
			default:
				break;
		}
	};

	onSearchButtonClicked = () => {
		// this.props.fillQueryProp(this.state.queryObject);
		this.props.getProductsProp(this.state.queryObject);
	};

	onClearClicked = () => {
		const empty = { store: '', category: '', subCategory: '', minPrice: '', maxPrice: '' };
		this.setState({
			queryObject: empty,
		});

		this.props.clearQueryProp(empty);
	};

	render() {
		return (
			<div>
				<div className="SearchBar card bg-light">
					<div className=".container">
						<div className="row">
							<div className="col-md-3">
								<form>
									<label for="storeSelect">Store: </label>
									<select id="storeSelect" onChange={this.changeValue}>
										{this.renderList(stores)}
									</select>
								</form>
							</div>
							<div className="col">
								<form id="categoryForm">
									<label for="categoryInput">Category: </label>
									<input
										type="text"
										list="categoryList"
										onChange={this.changeValue}
										id="categoryInput"
									/>
									<datalist id="categoryList">{this.renderList(categories)}</datalist>
								</form>
							</div>
							<div className="col">
								<form>
									<label for="subCatInput">Sub-category: </label>
									<input type="text" list="subCatList" onChange={this.changevalue} id="subCatInput" />
									<datalist id="subCatList">
										<option>To be added!</option>
									</datalist>
								</form>
							</div>
							<div className="col">
								<form id="minMaxPriceForm">
									<label for="minPriceLabel">Min-price: </label>
									<input type="number" id="minPriceLabel" />
									<label for="maxPriceLabel">Max-price: </label>
									<input type="number" id="maxPriceLabel" />
								</form>
							</div>
							<div className="col">
								<button className="btn-primary" onClick={this.onSearchButtonClicked}>
									Search
								</button>
								<button className="btn-primary" onClick={this.onClearClicked}>
									Clear
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
