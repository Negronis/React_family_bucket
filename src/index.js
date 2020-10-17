import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store';
import Actions from './store/action';
import Util from './util';
import { Provider } from 'react-redux';
// 全局修改高度
const dispatchHeight = () => {
  store.dispatch(Actions['globalData']['getHeight']())
}
const changeHeight = Util['throttle'](dispatchHeight, 500);
window.onresize = () => {
  changeHeight()
}
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
); 
