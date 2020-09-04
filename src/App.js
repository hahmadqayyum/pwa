import React from 'react';
import About from './About'
import Home from './Home'
import User from './User'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom'
import firebase from './firebase'



function App() {
  const messaging = firebase.messaging();
  messaging.requestPermission().then(() => {
    return messaging.getToken()
  }).then((token) => {
    alert(token)
    prompt('token', token)
    console.log('token', token)
  })
  return (

    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/User">Topics</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/User">
            <User />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>


  );
}

export default App;
