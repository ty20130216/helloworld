import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute, useRouterHistory } from 'react-router';
import { createHistory, createHashHistory } from 'history';
import Login from  './components/login.jsx'; 
import Summary from  './components/summary.jsx'; 

let history = useRouterHistory(createHashHistory)();

ReactDOM.render(<Router history={history} >
    <Route path="/">
      <IndexRoute component={Login} />
      <Route path="summary" component={Summary} />
    </Route>
  </Router>, document.getElementById("root"));