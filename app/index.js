import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute, useRouterHistory } from 'react-router';
import { createHistory, createHashHistory } from 'history';
import Login from  './components/login.jsx'; 
import Index from  './components/index.jsx'; 

let history = useRouterHistory(createHashHistory)();

ReactDOM.render(<Router history={history} >
    <Route path="/">
      <IndexRoute component={Login} />
      <Route path="index" component={Index} />
    </Route>
  </Router>, document.getElementById("root"));