import React from 'react';
import { Button, Container, Row, Column } from 'react-bootstrap';
import './Search.css';

const stores = ['prisma', 'selver', 'city-alko', 'coop'];
const categories = ['liha', 'puu- ja juurviljad', 'kala'];

export default class Search extends React.Component {
	constructor() {
		super();
		this.state = {
			queryObject: { store: '', category: '', subCategory: '', minPrice: '', maxPrice: '' },
		};
	}

	renderList = array => {
		let options = array.map(option => {
			return <option>{option}</option>;
		});

		return options;
	};

	checkIfValidElement = val => {
		let isValid = true;
		try {
			if (!stores.includes(val)) {
				isValid = false;
			}
		} catch (error) {
			console.log(error);
		}
		return isValid;
	};

	changeValue = e => {
		switch (e.target.id) {
			case 'storeInput':
				break;
			case 'categoryInput':
				break;
			case 'subCatInput':
				break;
			default:
				break;
		}
	};

	render() {
		return (
			<div>
				<div className="SearchBar">
					<div className=".container">
						<div className="row">
							<div className="col-md-3">
								<form>
									Store:{' '}
									<input type="text" list="storeList" onChange={this.changeValue} id="storeInput" />
									<datalist id="storeList">{this.renderList(stores)}</datalist>
								</form>
							</div>
							<div className="col">
								<form id="categoryForm">
									Category:{' '}
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
									Sub-category:{' '}
									<input type="text" list="subCatList" onChange={this.changevalue} id="subCatInput" />
									<datalist id="subCatList">
										<option>To be added!</option>
									</datalist>
								</form>
							</div>
							<div className="col">
								<form id="minMaxPriceForm">
									Min-price: <input type="number" />
									Max-price: <input type="number" />
								</form>
							</div>
							<div className="col">
								<button className="btn-primary">Search</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
