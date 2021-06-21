import React, { Component } from 'react';
import Header from './HeaderComponents';
import Home from './HomeComponent';
import {phones} from '../shared/Phones'
import { Switch, Route, Redirect } from 'react-router-dom';
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            PHONES: phones,
        };
    }
    render() {
        return (
            <div>
                <Header />
                <Home mobiles={this.state.PHONES}/>
                <h1>Hello Abhijeet!</h1>
            </div>
        );
    }
}

export default Main;