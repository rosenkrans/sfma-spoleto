import React from 'react';
import './App.css';
import RegistrationForm from './components/RegistrationForm';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignInLogInForm from './components/SignUpLogInForm';
import Dashboard from './components/Dashboard';
import SignUpLogInForm from './components/SignUpLogInForm';
import AuthProvider from './components/AuthContext';
import Navbar from './components/Navbar';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className="main-header">Seed & Feed goes to SPOLETO!</h1>
 
        <BrowserRouter>
          <AuthProvider>
            <Navbar />
            <Switch>
              <Route 
                exact
                path='/'
                component={SignUpLogInForm} 
              />
              <Route
                path='/dashboard'
                component={Dashboard}
              />
              <Route 
                path='/:userId/registration'
                component={RegistrationForm}
              />

              {/* <Route component={PageNotFound} /> */}             
            </Switch>
          </AuthProvider>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
