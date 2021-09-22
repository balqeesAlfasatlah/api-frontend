import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Favourite from './components/Favourite.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';

import LoginButton from './components/LoginButton';


export class App extends Component {

  render() {
  const { isAuthenticated } = this.props.auth0;

    return (
      <>

         <Router>
           <Header/>
           <Switch>
          
           <Route exact path ='/'>
          
             {isAuthenticated ? <Container><Home/></Container>  :<LoginButton/>}
          
           </Route>

           <Route exact path ='/Favourite'>
           {isAuthenticated ? <Container><Favourite/></Container>  :<LoginButton/>}

           </Route>
          

           </Switch>
         </Router>
      </>
    )
  }
}

export default withAuth0(App)
