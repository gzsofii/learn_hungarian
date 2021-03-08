import './App.scss';
import Cases from './components/Cases'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import menu from './/img/menu.png'

function App() {
  return (
    <Router>
      <header>
        <nav>
          <img src={menu}/>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cases">Cases</Link>
            </li>
            <li>
              <Link to="/verb_conjugation">Verb conjugation</Link>
            </li>
          </ul>
        </nav>
      
        <Switch>
          <Route path="/cases"><Cases/></Route>
          <Route path="/verb_conjugation"><h1>Verb conjugation</h1></Route>
          <Route path="/"><h1>Home</h1></Route>
        </Switch>
      </header>
    </Router>
      
  );
}

export default App;
