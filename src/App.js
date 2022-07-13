import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import Login from './components/Login';
import Landing from './components/Landing';
import Home from './components/Home';
import Addtask from './googleforms/Addtask.jsx';
import Tasklist from './googleforms/Tasklist';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Landing/>
          </Route>

          <Route path="/login">
            <Login/>
          </Route>

          <Route path="/signup">
            <Signup/>
          </Route>

          <Route path="/home">
            <Home/>
          </Route>

          <Route path="/addtask">
            <Addtask/>
          </Route>

          <Route path="/tasklist">
            <Tasklist/>
          </Route>

          <Route path="/edittask">
            <Edit/>
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}
export default App;