import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import SignUpForm from './components/user/SignUpForm';
import reportWebVitals from './reportWebVitals';


import { BrowserRouter as Router, Route,} from "react-router-dom";

import {applyMiddleware, createStore} from 'redux'
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer.js';

import thunk from 'redux-thunk'
import LoginForm from './components/user/LoginForm';
import Profile from './components/user/Profile';
import UserContainer  from './components/containers/UserContainer';



const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
    < Router >
      <Provider store={store}>
        < UserContainer />
        <Route path="/" render={(routerProps) => < App {...routerProps} />} />
        <Route exact path="/signup" component={SignUpForm} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/profile" component={Profile} />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
