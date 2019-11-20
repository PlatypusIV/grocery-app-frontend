import {combineReducers} from "redux";



const queryReducer = (state = {query:{}}, action) => {
	let newState = {...state};
	try {
		switch (action.type) {
			case 'FILL':
                console.log(action.payload);
                newState.query = action.payload;
				break;
			case 'CLEAR':
				break;
			default:
				break;
		}
	} catch (error) {
		console.log(error);
	}
	return newState;
};

const productsReducer = (state={products:[]}, action) => {
	let newState = state;

	try {
		switch (action.type) {
			case 'GET_NEW_PRODUCTS':
				break;
			case 'CLEAR':
				break;
			default:
				break;
		}
	} catch (error) {
		console.log(error);
	}
	return newState;
};

export const rootReducer = combineReducers({products:productsReducer,query:queryReducer});
