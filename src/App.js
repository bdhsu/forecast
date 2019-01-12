import React, { Component } from 'react';
import logo from './logo.svg';
import 'normalize.css';
import './App.css';
import api  from './utils/api';
import PropTypes from 'prop-types';

class LocationInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            location: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        var value = event.target.value;

        this.setState(_ => {
            return {
                location: value,
            }
        });
    }
    handleSubmit(event) {
        event.preventDefault();

        this.props.onSubmit(
            this.state.location,
        );
    }
    render() {
        return (
            <div className="loc-container">
                <form className="getweather" onSubmit={this.handleSubmit} style={this.props.style}>
                    <input
                        id="location"
                        placeholder="San Francisco, CA"
                        type="text"
                        className="locinput"
                        autoComplete="off"
                        value={this.state.location}
                        onChange={this.handleChange}
                    />
                    <button
                        className="btn"
                        type="submit"
                        disabled={!this.state.location}>
                            Get Weather
                    </button>
                </form>
            </div>
        )
    }
}

// LocationInput.propTypes = {
//     location: PropTypes.string.isRequired,
// }



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(location) {
        console.log('location: ' + location);

        api.fetchCurrentWeather(location);
        // this.setState(_ => {
        //
        // });
    }

    render() {
        return (
            <div className="App">
                <header>
                    <div className="header-logo">
                        <a href="#" >Forecast</a>
                    </div>
                    <LocationInput style={{flexDirection: "row"}} />
                </header>
                <div className="container">
                    <h1 className="text-center">Enter a City and State</h1>
                    <LocationInput
                        style={{flexDirection: "column"}}
                        onSubmit={this.handleSubmit}
                    />
                </div>
            </div>
        );
    }
}

export default App;
