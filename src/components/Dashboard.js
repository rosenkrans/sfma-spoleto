import React from 'react';
import {Link} from 'react-router-dom';
import { AuthConsumer } from './AuthContext';

class Dashboard extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {({user}) => (
          <React.Fragment>
            
            <h1 className="dashboard-header">My Dashboard</h1>
            <div className="dashboard-links">
              <Link className='dash-link' to={`${user.id}/aboutyou`}>Register</Link>
              <Link className='dash-link' to={`${user.id}/giginfo`}>Gig Info</Link>
              <Link className='dash-link' to={`${user.id}/charlestoninfo`}>Charleston Info</Link>
            </div>

          </React.Fragment>
        )}
     </AuthConsumer>
    )
  }
}

export default Dashboard;
