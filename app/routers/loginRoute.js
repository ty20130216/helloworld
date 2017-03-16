import React from 'react';
import {render} from 'react-dom';
import { createStore,bindActionCreators } from 'redux';
import { Provider ,connect} from 'react-redux';
import * as actions from '../actions/loginAction';
import Login from '../components/login'

class LoginRoute extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        const { actions, name,email,city} = this.props;
        return (
            <div>
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
        
        }, dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginRoute)