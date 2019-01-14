import React, {Component} from 'react';
// component
import dateHelper from './utils/dateHelper';

const Day = (props) => {
    var date = props.day.dt;
    var pic = props.day.weather["0"].icon;
    return (
        <div className="day-container">
            <div className="day-item" onClick={props.onClick}>
                <img className="day-pic" src={require("./img/weather-icons/" + pic + ".svg")} alt="" />
                <p className="day-title">{dateHelper.convertTimestamp(date)}</p>
            </div>
        </div>
    )
}

export default Day;
