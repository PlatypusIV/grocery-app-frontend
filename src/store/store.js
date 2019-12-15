import {createStore} from "redux";
import {rootReducer} from "./reducers";

const state={
    query:{},
    currentProducts:{prisma:[],coop:[],selver:[]},
    categories:[],
    mainCategories:[],
    subCategories:[]
}

export const storeConfig = createStore(rootReducer,state);