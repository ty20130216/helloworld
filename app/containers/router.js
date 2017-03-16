import React, { Component ,PropTypes} from 'react';
import { Redirect, Router, Route } from 'react-router';
import History from 'history/lib/createHashHistory';
import LoginRoute from '../routers/loginRoute';
import SummaryRoute from '../routers/summaryRoute';


export default class AppRouter extends Component {
    constructor(props) {
        super(props);
        this.history = new History();
    }

    render() {
        return (
            <div>
                <Router history={this.history}>
                    <Redirect from="/" to="/login"/>
                    <Route path="login" component={LoginRoute} />
                    <Route path="summary" component={SummaryRoute} />
                </Router>
            </div>
        );
    }
}