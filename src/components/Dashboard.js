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
            <div className="dashboard-links">
              <Link className='dash-link' to={`${user.id}/registration`}>Register</Link>
              <Link className='dash-link' to={`${user.id}/healthform`}>Health Info</Link>
            </div>

          </React.Fragment>
        )}
     </AuthConsumer>
    )
  }
}

export default Dashboard;
