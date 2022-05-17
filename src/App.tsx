import React, { Suspense, useEffect } from "react";
import "./App.css";
import { Route, Switch, Redirect, HashRouter as Router, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import DoorPage from "./Pages/DoorPage/DoorPage";
import LifePage from "./Pages/LifePage/LifePage";
import MainPage from "./Pages/MainPage/MainPage";

import UserAnalytics from "./UserAnalytics";

const TRACKING_ID = "G-EQ8SQ1G84X";

function App() {
  return (
    <Router>
      <Route
        render={() => (
          <AnimatePresence exitBeforeEnter>
            <Switch>
              <Route exact path="/monolith/:uni" render={() => <DoorPage />} />
              <Route exact path="/intro/:uni" render={() => <LifePage />} />
              <Route exact path="/main" render={() => <MainPage />} />

              <Redirect exact to="/intro/default" />
            </Switch>
          </AnimatePresence>
        )}
      />
      {TRACKING_ID && <UserAnalytics />}
    </Router>
  );
}

export default App;
