import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.scss';
import Cases from './components/Cases';
import DefiniteExercise from './components/exercises/DefiniteExercise';


function App() {
  return (
    <Router>
        <nav>
          <span>Menu</span>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Theory
              <ol>
                <li>
                  <Link to="/cases">Noun cases</Link>
                </li>
                <li>
                  <Link to="/verb_conjugation">Verb conjugation</Link>
                </li>
               </ol>
            </li>
            <li>Exercises
              <ol>
                <li>
                  <Link to="/definite_indefinite_exercise">Definite-indefinite</Link>
                </li>
                <li>
                  <Link to="/cases_exercise">Noun cases exercise</Link>
                </li>
              </ol>

            </li>
          </ul>
        </nav>
   
      
        <Switch>
          <Route path="/cases"><Cases/></Route>
          <Route path="/verb_conjugation"><h1>Verb conjugation</h1></Route>
          <Route path="/definite_indefinite_exercise"><DefiniteExercise/></Route>
          <Route path="/cases_exercise"><h1>Noun cases exercise</h1></Route>
          <Route path="/"><h1>Home</h1></Route>
        </Switch>
        
    </Router>

 
  );
}

export default App;
