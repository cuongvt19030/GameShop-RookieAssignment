import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import InLineLoader from "./shared-components/InlineLoader";
import { GAME , GENRE } from './Constants/pages';

const Game = lazy(() => import('./components/Game'));
const Genre = lazy(() => import('./components/Genre'));

const SusspenseLoading = ({ children }) => (
  <Suspense fallback={<InLineLoader />}>
    {children}
  </Suspense>
);

function App() {
  return (
    <Router>
    <div className="App">
    <Navbar />

      <SusspenseLoading>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path={GAME}>
            <Game />
          </Route>

          <Route path={GENRE}>
            <Genre />
          </Route>
        </Switch>
      </SusspenseLoading>
    </div>
    </Router>
  );
}

export default App;
