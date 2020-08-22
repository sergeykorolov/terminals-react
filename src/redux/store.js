import {combineReducers, createStore} from "redux";
import authReducer from "./auth-reducer";
import buyersReducer from "./buyers-reducer";
import terminalsReducer from "./terminals-reducer";

const reducers = combineReducers({
    auth: authReducer,
    buyersPage: buyersReducer,
    terminalsPage: terminalsReducer
});

const store = createStore(reducers);

export default store;