import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import contactsReducer from './contactsSlice';

const store = createStore(contactsReducer, applyMiddleware(thunk));

export default store;
