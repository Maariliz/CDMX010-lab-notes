import './App.css';
import Crud from './firebase.js'
import Welcome from './Components/Welcome';
import Login from './Components/Login';
import Signup from './Components/Signup';
// import Back from './Components/Back';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {

  return (
<Router>
    <div className="App">

      <Switch>
      <Route path="/" exact component={Welcome} />
      <Route path="/login" exact component={Login} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/yournotes" exact component={Crud} />
      </Switch>

    </div>
</Router>
  );
}

export default App;
