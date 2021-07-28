import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GENRE, GAME } from './Constants/pages';
import React, { lazy, Suspense } from 'react';
import Loader from './shared-components/Loader';

const Genre = lazy(() => import('./components/Genre'));
const Game = lazy(() => import('./components/Game'));

const SuspenseLoading = ({ children }) => (
  <Suspense fallback={<Loader />}>
    {children}
  </Suspense>
);

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <SuspenseLoading>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path={GENRE}>
              <Genre />
            </Route>
            <Route path={GAME}>
              <Game />
            </Route>
          </Switch>
        </SuspenseLoading>
      </Router>
    </div>
  );
}

export default App;
