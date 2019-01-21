import React, { Component } from 'react';
import logo from './logo.svg';
import 'normalize.css';
import './App.css';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

// components
import Home from './Home';
import Forecast from './Forecast';
import LocationInput from './LocationInput';
import Details from './Details';
import api  from './utils/api';


class App extends Component {
    constructor(props) {
        super(props);

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
            <Router>
                <div className="App">
                    <header>
                        <div className="header-logo">
                            <a href="/" >Forecast</a>
                        </div>
                    </header>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/forecast" component={Forecast} />
                        <Route path="/details/:city" component={Details} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
