import React from 'react';
import {render} from 'react-dom';
import { createStore,bindActionCreators } from 'redux';
import { Provider ,connect} from 'react-redux';
import * as actions from '../actions/loginAction';
import reducers from '../reducers/loginReducer';
import Summary from '../components/summary';
import Silder from '../components/silder';

class SummaryRoute extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        const { actions, name,email,city,weather} = this.props;
        return (
            <div>
                <div className="rapper">
                    <Silder/>
                    <Summary actions={actions} name={name} email={email} city={city} weather={weather}/>
                </div>
            </div>
        )
    }
};

function mapStateToProps(state) {
    return { name: state.get("name"),email: state.get("email") ,city: state.get("city"),weather:state.get("weather") }
}

function mapDispatchToProps(dispatch){
    return{
        actions: bindActionCreators({
            setData: actions.setData
        }, dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SummaryRoute)

