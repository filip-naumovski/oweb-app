import './style.css';
import React from 'react';
import Home from './Home';
import Gallery from './Gallery';
import Contact from './Contact';
import Nav from './Nav';
import Music from './Music';
import Food from './Food';
import Survey from './Survey'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/contact" component={Contact} />
            <Route path="/music" component={Music} />
            <Route path="/food" component={Food} />
            <Route path="/survey" component={Survey} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
