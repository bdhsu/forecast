import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// components
import api  from './utils/api';


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
        var location = event.target.value;

        this.setState(_ => {
            return {
                location: location,
            }
        });
    }
    handleSubmit(event) {
        event.preventDefault();

        this.props.onSubmit(this.state.location);
    }
    render() {
        return (
            <div className="getweather" style={this.props.style}>
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
                    type="button"
                    disabled={!this.state.location}
                    onClick={this.handleSubmit}>
                        Get Weather
                </button>
            </div>
        )
    }
}

LocationInput.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

export default LocationInput;
