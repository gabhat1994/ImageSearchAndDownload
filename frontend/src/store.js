import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { imageReducer } from "./reducers/imageReducer";
import thunk from "redux-thunk";

const initialState = {};

const reducer = combineReducers({
  imageReducer: imageReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
