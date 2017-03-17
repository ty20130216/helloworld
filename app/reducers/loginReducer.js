import {actionType} from '../constants/actionType/actiontypes';
import Immutable from 'immutable';

//reducer
const initialState = Immutable.fromJS({
    name:'',
    email:'',
    city:'',
    weather:''
})

function myApp(state = initialState, action) {
    switch (action.type) {
        case actionType.load:
            return state;
        case actionType.setData:
            return state.setIn(action.path, action.data)
        default:
            return state;
    }
}

export default myApp