import React, { Component } from 'react';
import logo from '../img/logo.svg';
import '../css/App.css';
import { GoogleLogin } from 'react-google-login';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  render() {
    const responseGoogle = (response) => {
      console.log(response);
    }
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">It's time to share your car/gasmoney</h1>
        </header>
        <br /><br />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/driver">
            <Driver />
          </Route>
          <Route path="/hitchhiker">
            <Hitchhiker />
          </Route>
        </Switch>
      </div>
      </Router>
    );
    
    function Login() {
      return (
        <GoogleLogin
          clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      );
    }

    function Home() {
      return (
        <div>
          <h2>I have</h2>
          <div>
          <Link to="/driver">
            <input class="btn btn-primary" type="button" value="Car" />
          </Link>
          <br /><br />
          <Link to="/hitchhiker">
            <input class="btn btn-primary" type="button" value="Gas Money" />
          </Link>
          </div>
        </div>
      );
    }
    
    function Driver() {
      return ( 
        <div>
        <h2>Where are you going ?</h2>
          <input type="text" value="From address" />
          <br />
          <input type="text" value="Address" />
          <br />
          <input type="text" value="Time" />
          <br />
          <input class="btn btn-primary" type="button" value="Submit" />
        </div>
      );
    }

    function Hitchhiker() {
      return ( 
        <div>
        <h2>Where are you going ?</h2>
          <input type="text" value="From address" />
          <br />
          <input type="text" value="Address" />
          <br />
          <input type="text" value="Time" />
          <br />
          <input class="btn btn-primary" type="button" value="Submit" />
        </div>
      );
    }
  }
}

export default App;
