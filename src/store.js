import { applyMiddleware, createStore, combineReducers, compose } from "redux";
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { weatherReducer } from "./components/weatherApp/redux/reducer";

const rootReducer = combineReducers({ weather: weatherReducer });
const middlewares = [thunk, logger];


const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
