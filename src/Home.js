import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import api  from './utils/api';

class Home extends Component {
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
