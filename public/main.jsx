// CIS 197 - React HW
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { mainReducer as reducers } from './reducers';
import * as actions from './actions/index';
import * as initialState from './initialState';
import SelectionScreen from './components/SelectionScreen.jsx';

const store = createStore(reducers, initialState);


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <SelectionScreen store={store}/>,
    document.getElementById('container')
  );
});
