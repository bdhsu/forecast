import React, { Component } from 'react';
import queryString from 'query-string';
// components
import api from './utils/api';
import dateHelper from './utils/dateHelper';

const Day = (props) => {
    var date = props.day.dt;
    var pic = props.day.weather["0"].icon;
    return (
        <div className="day-item">
            <img className="day-pic" src={require("./img/weather-icons/" + pic + ".svg")} alt="" />
            <p className="day-title">{dateHelper.convertTimestamp(date)}</p>
        </div>
    )
}

class Forecast extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            location: null,
            weather: null,
            loading: true,
        }
    }
    componentDidMount() {
        var location = queryString.parse(this.props.location.search);
        api.fetchFiveDayForecast(location["city"])
            .then(function(results) {
                if(results === null) {
                    this.setState(_ => {
                        return {
                            error: "seems to be an error",
                            loading: false,
                        }
                    })
                }

                this.setState(_ => {
                    return {
                        error: null,
                        location: location["city"],
                        weather: results.list,
                        loading: false,
                    }
                });
            }.bind(this));
    }

    // handleClick(location) {
    //     console.log(JSON.stringify(location));
    //
    //     this.props.history.push({
    //         pathname: 'forecast',
    //         search: '?city=' + location,
    //     });
    // }

    render() {
        var error = this.state.error;
        var location = this.state.location;
        var weather = this.state.weather;
        var loading = this.state.loading;

        if(loading === true) {
            return <div>loading...</div>
        }

        if(error) {
            return (
                <div>
                    <p>{error}</p>
                </div>
            )
        }

        return (
            <div className="container">
                {JSON.stringify(weather["0"])}
                {/* {JSON.stringify(weather["0"])} */}
                {/* {JSON.stringify(dateHelper.convertTimestamp(weather[0].dt))}
                {JSON.stringify(dateHelper.convertTimestamp(weather[1].dt))}
                {JSON.stringify(dateHelper.convertTimestamp(weather[2].dt))}
                {JSON.stringify(dateHelper.convertTimestamp(weather[3].dt))}
                {JSON.stringify(dateHelper.convertTimestamp(weather[4].dt))}
                {JSON.stringify(dateHelper.convertTimestamp(weather[5].dt))}
                {JSON.stringify(dateHelper.convertTimestamp(weather[6].dt))}
                {JSON.stringify(dateHelper.convertTimestamp(weather[7].dt))}
                {JSON.stringify(dateHelper.convertTimestamp(weather[8].dt))} */}
                <div className="day-container">
                    {weather.map(function(day) {
                        return <Day day={day}/>
                    }, this)}
                </div>

            </div>
        )
    }
}

export default Forecast;
