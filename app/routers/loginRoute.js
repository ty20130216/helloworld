import React from 'react';
import {render} from 'react-dom';
import { createStore,bindActionCreators } from 'redux';
import { Provider ,connect} from 'react-redux';
import * as actions from '../actions/loginAction';
import reducers from '../reducers/loginReducer';
import Login from '../components/login';
import Silder from '../components/silder'


class LoginRoute extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        const { actions, name,email,city} = this.props;
        return (
            <div className="rapper">
            		<Silder name={name}/>
                <Login actions={actions} name={name} email={email} city={city}/>
            </div>
        );
    }
};

function mapStateToProps(state) {
    return { name: state.get("name"),email: state.get("email"),city:state.get('city') }
}

function mapDispatchToProps(dispatch){
    return{
        actions: bindActionCreators({
            setData:actions.setData
        }, dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginRoute)

