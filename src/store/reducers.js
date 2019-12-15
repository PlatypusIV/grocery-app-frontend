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

const getCategoriesReducer = (state = { categories: {} }, action) => {
	let newState = state;
	try {
		switch (action.type) {
			case 'GET_CATEGORIES':
				newState.categories = action.payload;
				console.log(newState.categories);
				break;
			default:
				break;
		}
	} catch (error) {
		console.log(error);
	}

	return newState;
};

const categoriesReducer =(state={mainCategories:[],subCategories:[]})=>{
	try {
		
	} catch (error) {
		console.log(error);
	}
}

export const rootReducer = combineReducers({
	products: productsReducer,
	query: queryReducer,
	getCategories: getCategoriesReducer,
});
