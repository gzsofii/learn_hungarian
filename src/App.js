import React from 'react'
import './App.scss';
import Cases from './components/Cases'
import Exercises from './components/Exercises'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <header>
        <nav>
          
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Theory
              <ul>
                <li>
                  <Link to="/cases">Noun cases</Link>
                </li>
                <li>
                  <Link to="/verb_conjugation">Verb conjugation</Link>
                </li>
               </ul>
            </li>
            <li>Exercises
              <ul>
                <li>
                  <Link to="/definit_indefinite">Definite-indefinite</Link>
                </li>
               </ul>
            </li>
          </ul>
        </nav>
      
        <Switch>
          <Route path="/cases"><Cases/></Route>
          <Route path="/verb_conjugation"><h1>Verb conjugation</h1></Route>
          <Route path="/definite_indefinite"><h1>Definite-indefinite verb conjugation</h1></Route>
          <Route path="/"><h1>Home</h1></Route>
        </Switch>
      </header>
    </Router>

 
  );
}

export default App;
