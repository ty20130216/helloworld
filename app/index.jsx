import React from 'react';
import ReactDom from 'react-dom';
import App from './containers/app';
require('../less/index.less');

ReactDom.render(
    <App />,
    document.getElementById('root')
);