import {actionType} from '../constants/actionType/actiontypes';


export const loadState = data => {
    return {
        type: actionType.load,
        data: data
    };
};

export const setData = (path, data) => {
    return {
        type: actionType.setData,
        data: data,
        path: path
    }
}

