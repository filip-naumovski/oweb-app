import './style.css';
import React from 'react';
import Home from './Home';
import Favorites from './Favorites';
import Gallery from './Gallery';
import Nav from './Nav';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends React.Component{
  constructor(){
    super()
    this.state = {

    }
  }
  render(){
    return(
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/favorites" component={Favorites}/>
            <Route path="/gallery" component={Gallery}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
