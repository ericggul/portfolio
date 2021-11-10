import React from 'react';
import './App.css';
import {
  Route, Switch, Redirect, HashRouter as Router, useLocation
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import DoorPage from './Pages/DoorPage/DoorPage';
import LifePage from './Pages/LifePage/LifePage';
import MainPage from './Pages/MainPage/MainPage';
import DetailPage from './Pages/DetailPage/DetailPage';
import VisualDetailPage from './Pages/VisualDetailPage/VisualDetailPage';

import Project1 from './Projects/Project1/Project1';

function App() {


  return(
    <Router>
      <Route render={() =>(
        <AnimatePresence exitBeforeEnter>
          <Switch>
            <Route 
              exact path="/monolith/:uni" 
              render={()=> <DoorPage />}
            />
            <Route 
              exact path="/intro/:uni" 
              render={()=> <LifePage />}
            />
            <Route 
              exact path="/main" 
              render={()=> <MainPage />}
            />
            <Route 
              exact path="/project1" 
              render={()=> <Project1 />}
            />
            <Route 
              exact path="/detail/:id" 
              render={()=> <DetailPage />}
            />
            <Route 
              exact path="/visual-detail/:indicator" 
              render={()=> <VisualDetailPage />}
            />
            <Redirect exact to="/intro/UAL"/>
          </Switch>
        </AnimatePresence>
      )} />
    </Router>
  )
}

export default App;