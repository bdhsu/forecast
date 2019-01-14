import React, { Component } from 'react';
import Day from './Day';
import dateHelper from './utils/dateHelper';

class Details extends Component {
    render() {
        var day = this.props.location.state;
        return (
            <div>
                <Day key={day.dt} day={day}/>
                <div className="details-container">
                    <p>{day.weather[0].description}</p>
                    <p>min temp: {dateHelper.convertTemp(day.temp.min)}°F</p>
                    <p>max temp: {dateHelper.convertTemp(day.temp.max)}°F</p>
                    <p>humidity: {day.humidity}%</p>
                </div>
            </div>
        )
    }
}

export default Details;
