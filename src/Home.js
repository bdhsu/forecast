import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// components
import LocationInput from './LocationInput';
import api from './utils/api';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(location) {
        this.props.history.push({
            pathname: 'forecast',
            search: '?city=' + location,
        });
    }
    render() {
        return (
            <div className="container">
                <h1 className="text-center">Enter a City and State</h1>
                <LocationInput
                    style={{flexDirection: "column"}}
                    onSubmit={this.handleSubmit}
                />
            </div>
        )
    }
}

export default Home;
