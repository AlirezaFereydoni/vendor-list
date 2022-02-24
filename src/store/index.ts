import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
import thunk from "redux-thunk";

const middleWare = [thunk];

const enhancer = applyMiddleware(...middleWare);

const store = createStore(reducer, enhancer);

export default store;
