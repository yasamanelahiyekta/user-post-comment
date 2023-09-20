import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { users, posts, comments } from "./reducer";
const reducers = combineReducers({ users, posts, comments })
const middleware = [thunk]
const store = createStore(reducers, applyMiddleware(...middleware))
export default store