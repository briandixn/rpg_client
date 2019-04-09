import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'react-redux';

export const store = createStore(
	combineReducers({

	}),
	applyMiddleware(thunk)
);