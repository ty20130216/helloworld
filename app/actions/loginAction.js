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

export const loadWeather = (city) => {
    return dispatch => {
        reqwest({
            method:'get',
            url: 'http://api.openweathermap.org/data/2.5/weather?APPID=b714ec74bbab5650795063cb0fdf5fbe',
            data:{
                q : "[" + city +"]"
            }
            , type: 'json',
            crossOrigin: true

        })
            .then(function (resp) {
                dispatch( {
                    type: actionType.setData,
                    data: resp.weather[0].description,
                    path: ['weather']
                })
            }, function (err, msg) {
                dispatch( {
                    type: actionType.setData,
                    data: '',
                    path: ['weather']
                })
                console.log("error")
            })
    }
}