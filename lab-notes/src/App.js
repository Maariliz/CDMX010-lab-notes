import React,{useState} from 'react';
import './App.css';

import Crud from './firebase.js'
//import Welcome from './Components/Welcome';
import Login from './Components/Login';
import Signup from './Components/Signup';


// import Back from './Components/Back';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Welcome from './Components/Welcome';


function App() {
  const [autenticate, setAutenticate]=useState(false)

  const handlesetAutenticate=()=>{
    setAutenticate(true)
  }

 return (<div className="App">
{autenticate?<Router>

        <Switch>
        <Route path="/" exact component= {Welcome} />
        <Route path="/login" exact component={Login} />
        <Route path="/yournotes" exact component={Crud} />
        <Route path="/signup" exact component={Signup} />
        </Switch>

  </Router>:
<Router>
  <Switch>
  <Route  exact path="/" >
    <Welcome
      handlesetAutenticate={handlesetAutenticate}
    />
    </Route>
    <Route  exact path="/login" >
    <Login
      handlesetAutenticate={handlesetAutenticate}
    />
    </Route>
    <Route  exact path="/signup" >
    <Signup
      handlesetAutenticate={handlesetAutenticate}
    />
    </Route>

    <Route  exact path="/yournotes" >
    <Crud
      handlesetAutenticate={handlesetAutenticate}
    />
    </Route>

  </Switch>
</Router>
}</div>
  );
}

export default App;
