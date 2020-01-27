import React from 'react';
import './App.css';
import RegistrationForm from './components/RegistrationForm';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignUpLogInForm from './components/SignUpLogInForm';
import Dashboard from './components/Dashboard';
import AuthProvider from './components/AuthContext';
import Navbar from './components/Navbar';
import HealthForm from './components/HealthForm';
import ParkingForm from './components/ParkingForm';
import AboutTheUserForm from './components/AboutTheUserForm';
import AboutTheTripForm from './components/AboutTheTripForm';

class App extends React.Component {
  render() {
    return (
      <div className="full-page">
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
              <Route
                path='/:userId/healthform'
                component={HealthForm}
              />
              <Route
                path='/:userId/parkingform'
                component={ParkingForm}
              />
              <Route
                path='/:userId/aboutyou'
                component={AboutTheUserForm}
              />
              <Route
                path='/:userId/abouttrip'
                component={AboutTheTripForm}
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
