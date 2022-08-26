import { applyMiddleware, createStore } from "redux";

// Logger with default options
import logger from "redux-logger";
import rootReducer from "../src/reducers/rootReducer";
const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
