import React from 'react';
import './App.css';
import RegistrationForm from './components/RegistrationForm';
// import Header from './components/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignInLogInForm from './components/SignUpLogInForm';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Seed & Feed goes to SPOLETO!</h1>
        
        
        {/* <Header /> */}
        <BrowserRouter>
          {/* <AuthProvider>
            <Header />
            <Switch> */}
              <Route 
                exact
                path='/'
                component={RegistrationForm} 
              />

              {/* <Route component={PageNotFound} /> */}
              
            {/* </Switch>
          </AuthProvider> */}
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
