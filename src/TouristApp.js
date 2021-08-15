import './TouristApp.css';
import React from 'react';

import {BrowserRouter, Route, Switch } from 'react-router-dom';

import Dashboard from './component/Dashboard';
import SpotForm from './component/SpotAdd';


class TouristApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      spots : [
        {
          id : 1,
          name: 'Lalbagh Fort',
          address: 'Lalbagh',
          rating: '2',
          picture: "http://picsum.photos/200/201"
        },
        {
          id : 2,
          name: 'Sera Dip',
          address: 'St. Martain',
          rating: '4',
          picture: "http://picsum.photos/201/200"
        }
      ]
    }
  }

  handleItemDelete = (id) => {
    const newSpotsList = this.state.spots.filter(item=> item.id!==id);
    this.setState({spots:newSpotsList});
  }

  handleItemAddUpdate = (item) =>{
    const newSpotsList = this.state.spots.filter(spot=> Number(spot.id)!==Number(item.id));
    if(!item['id']) item['id'] = Date.now();
    newSpotsList.push(item);
    this.setState({spots:newSpotsList});
  }

  render(){
    return (
      <div className="App-header">
        <BrowserRouter>
          <Switch>
            <Route path="/new" render={(props)=><SpotForm {...props} new onItemAdd={(item)=>this.handleItemAddUpdate(item)}/>} exact></Route>
            <Route path="/:id" render={(props)=><SpotForm {...props} spots={this.state.spots} onItemAdd={(item)=>this.handleItemAddUpdate(item)}/>} ></Route>
            <Route path="" render={()=> <Dashboard spots={this.state.spots} onDelete={(id)=>this.handleItemDelete(id)}/>} exact></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default TouristApp;
