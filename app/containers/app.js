import Component  from 'react';
import AppRouter from './router';
import {createStore, applyMiddleware ,compose} from 'redux';
import { Provider } from 'react-redux';
import reducers from '../reducers/loginReducer';

let store = createStore(reducers, undefined, compose(
        applyMiddleware(
        ),
        window.devToolsExtension ? window.devToolsExtension() : f => f
));

if (module.hot) {
    module.hot.accept('../reducers/loginReducer', () => {
        const nextRootReducer = require('../reducers/loginReducer');
        store.replaceReducer(nextRootReducer);
    });
}

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Provider store={store}>
                    <AppRouter/>
                </Provider>
            </div>
        );
    }
}