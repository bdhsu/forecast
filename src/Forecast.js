import React, { Component } from 'react';
import queryString from 'query-string';
// components
import api  from './utils/api';

class Forecast extends Component {
    constructor(props) {
        super(props);

        this.state = {
            location: null,
            loading: true,
        }
    }
    componentDidMount() {
        var location = queryString.parse(this.props.location.search);
        this.setState(_ => {
            return {
                location: location,
                loading: false,
            }
        });
    }
    render() {
        var location = this.state.location;
        var loading = this.state.loading;

        if(loading === true) {
            return <div>loading...</div>
        }
        return (


            <div className="container">
                {/* {JSON.stringify(location["city"])} */}
                {JSON.stringify(api.fetchCurrentWeather(location["city"]))}
            </div>
        )
    }
}

export default Forecast;
