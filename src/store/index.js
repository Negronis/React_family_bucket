import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import Reducer from './reducer';
const { Global_Reducer } = Reducer;
const RootReducerObject = {
    global: Global_Reducer
}
const RootReducer = combineReducers(RootReducerObject);
const store = createStore(RootReducer, applyMiddleware(
    thunkMiddleware
))
export default store;