import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Main from './container/Main';
import Accuil from './components/Menu/Accuil';
import NousSommes from './components/Menu/Nous_Sommes';
import NosGateaux from './components/Menu/NosGateaux';
import NosService from './components/Menu/NosService';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Main} />
          <Route path='/Accuil' component={Accuil} />
          <Route path='/NousSommes' component={NousSommes} />
          <Route path='/NosGateaux' component={NosGateaux} />
          <Route path='/NosService' component={NosService} />
        </div>
      </Router>
    )
  }
}

export default App;