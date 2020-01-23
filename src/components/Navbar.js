import React from 'react';
import { AuthConsumer } from './AuthContext';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return(
    <AuthConsumer>
      {({user, logOut}) => (
        <React.Fragment>
          <div className="navbar">
            {/* <h2>Navbar</h2> */}
            {user.id ? (
              <React.Fragment>
                <div className="nav-links">
                  <Link to='/dashboard'>My Dashboard</Link>
                </div>
                <div className="user-logout">
                  <small>User: {user.email}</small>
                  <button className="logout-button" onClick={(e) => logOut(e)}>Log Out</button>
                </div>
              </React.Fragment>
            ) : (
              <small>Please Sign In</small>
            )}
            
          </div>
        </React.Fragment>
      )}
      
    </AuthConsumer>
         
  )
}

export default Navbar;