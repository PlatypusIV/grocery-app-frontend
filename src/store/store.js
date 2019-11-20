import {createStore} from "redux";
import {rootReducer} from "./reducers";

const state={
    query:{},
    currentProducts:[]
}

export const storeConfig = createStore(rootReducer,state);