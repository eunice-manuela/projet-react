import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Tickets from './components/Tickets/Tickets';
import {Accueil} from './components/Accueil';
import Notifications from './components/Notifications/Notifications'
import Staff from './components/Staff/Staff'
import Services from './components/Services/Services'
import Navbar from './components/Navbar'
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import IsUserRoute from './components/IsUserRoute';




render(
  <div>
    
    <Router>
        <Navbar/>
        <Route exact path="/" component={Accueil}/>
        <Route path="/tickets" component={Tickets}/>
        <Route path="/services" component={Services}/>
        <Route path="/notifications" component={Notifications}/>
        <Route path="/staff" component={Staff}/>
    </Router>
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
