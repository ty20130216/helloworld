
import Immutable from 'immutable';

//reducer
const initialState = Immutable.fromJS({
    name:'',
    email:'',
    city:'',
    weather:''
})

function reducer(state = initialState, action) {
	return state;
}

export default reducer