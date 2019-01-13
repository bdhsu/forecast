import React, { Component } from 'react';
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

export default LocationInput;
