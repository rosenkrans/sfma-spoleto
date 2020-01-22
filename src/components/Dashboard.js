import React from 'react';
import {Link} from 'react-router-dom';
import { AuthConsumer } from './AuthContext';

class Dashboard extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {({user}) => (
          <React.Fragment>
            
            <h1>Dashboard Page HOORAY!</h1>
            <Link to={`${user.id}/registration`}>Register</Link>
            <Link to={`${user.id}/healthform`}>Health Info</Link>

          </React.Fragment>
        )}
     </AuthConsumer>
    )
  }
}

export default Dashboard;
