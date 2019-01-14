import React, { Component } from 'react';
import queryString from 'query-string';
// components
import api from './utils/api';
import dateHelper from './utils/dateHelper';
import Day from './Day';



class Forecast extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            location: null,
            weather: null,
            loading: true,
        }

        this.handleClick = this.handleClick.bind(this);
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

    handleClick(day) {
        console.log('hi');
        console.log(JSON.stringify(day));

        this.props.history.push({
            pathname: '/details/' + this.state.location,
            state: day,
        });
    }

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
                {/* {JSON.stringify(weather["0"])} */}
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
                {weather.map(function(day) {
                    return <Day onClick={_ => this.handleClick(day)} key={day.dt} day={day}/>
                }, this)}
            </div>
        )
    }
}

export default Forecast;
