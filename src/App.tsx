import React from 'react';
import './App.css';
import {
  Route, Switch, Redirect, HashRouter as Router, useLocation
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import DoorPage from './Pages/DoorPage/DoorPage';
import LifePage from './Pages/LifePage/LifePage';
import MainPageShadow from './Pages/MainPageShadow/MainPageShadow';

import Project1 from './Projects/Project1/Project1';

function App() {


  return(
    <Router>
      <Route render={() =>(
        <AnimatePresence exitBeforeEnter>
          <Switch>
            <Route 
              exact path="/door" 
              render={()=> <DoorPage />}
            />
            <Route 
              exact path="/life" 
              render={()=> <LifePage />}
            />

            <Route 
              exact path="/main" 
              render={()=> <MainPageShadow />}
            />

            <Route 
              exact path="/project1" 
              render={()=> <Project1 />}
            />
            <Redirect exact to="/life"/>
          </Switch>
        </AnimatePresence>
      )} />
    </Router>
  )
}

export default App;