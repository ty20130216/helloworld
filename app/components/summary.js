import React, {Component,PropTypes} from 'react';
import {render} from 'react-dom';


export default class Summary extends React.Component{
    constructor(props) {
        super(props);
    }
	loadweather(city){
        let self = this
        if(city.length === 0){
            return
        }
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
                self.props.actions.setData(['weather'],resp.weather[0].description)
            }, function (err, msg) {
                self.props.actions.setData(['weather'],'')
                console.log("error")
            })

    }

    componentWillMount(){
        this.loadweather(this.props.city)
    }
   
    render() {
        return (
            <div className="article">
                <div>Welcome [{this.props.name}], we have put your email ([{this.props.email}]) on record.</div>
                <div>The weather in [{this.props.city}] is currently [{this.props.weather}]</div>
            </div>
        )
    }
}
