import './TouristApp.css';
import React from 'react';

import {BrowserRouter, Route, Switch } from 'react-router-dom';

import Dashboard from './component/Dashboard';
import SpotForm from './component/SpotAdd';


class TouristApp extends React.Component {
  render(){
    return (
      <div className="App-header">
        <BrowserRouter>
          <Switch>
            <Route path="/new" component={SpotForm} exact></Route>
            <Route path="/:id" component={SpotForm} ></Route>
            <Route path="" component={Dashboard} exact></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default TouristApp;
