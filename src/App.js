import React, { Component } from 'react';
import logo from './logo.svg';
import 'normalize.css';
import './App.css';
import api  from './utils/api';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from './Home';
import Forecast from './Forecast';
import LocationInput from './LocationInput';

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

        // api.fetchCurrentWeather(location);
        api.fetchFiveDayForecast(location);
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
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/forecast" component={Forecast} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
