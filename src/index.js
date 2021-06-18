import React from "react";
import ReactDom from "react-dom";
import config from "./lazychun";
import { getConfig } from "./libs/config";
import serverStore from "./libs/mockServerStore";
import 'antd/dist/antd.css';

import { Router, Route } from "react-router";
import { history } from './utils/history';

import App from "./App.js";
import CardHome from './components/CardHome';

import { Provider } from 'react-redux';
import store from './store';


window.config = config;
window.serverStore = window.serverStore || serverStore;
window.programConfig = getConfig();

ReactDom.render(
  <Router history={history}>
    <Provider store={ store }>
      <Route exact path="/" component={()=><App />} />
      <Route exact path="/home" component={ CardHome } />
    </Provider>
  </Router>
  , document.getElementById("__$program_code$__"));
