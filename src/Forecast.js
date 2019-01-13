import React, { Component } from 'react';
import queryString from 'query-string';
// components
import api  from './utils/api';

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
                        weather: results.list["0"],
                        loading: false,
                    }
                });
            }.bind(this));
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
                {JSON.stringify(weather)}
            </div>
        )
    }
}

export default Forecast;
