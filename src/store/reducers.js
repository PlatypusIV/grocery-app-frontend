import { combineReducers } from 'redux';


const queryReducer = (state = { query: {} }, action) => {
	let newState = { ...state };
	try {
		switch (action.type) {
			case 'FILL':
				console.log(action.payload);
				newState.query = action.payload;
				break;
			case 'CLEAR':
				console.log(action.payload);
				newState.query = action.payload;
				break;
			default:
				break;
		}
	} catch (error) {
		console.log(error);
	}
	return newState;
};

const productsReducer = (state = { products: [] }, action) => {
	let newState = state;

	try {
		switch (action.type) {
			case 'GET_NEW_PRODUCTS':
                newState.products = action.payload;
				break;
			case 'CLEAR':
                newState.products = [];
				break;
			default:
				break;
		}
	} catch (error) {
		console.log(error);
	}
	return newState;
};

export const rootReducer = combineReducers({ products: productsReducer, query: queryReducer });
