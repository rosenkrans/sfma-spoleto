import React from 'react';
import { AuthConsumer } from './AuthContext';

const Navbar = () => {
  return(
    <AuthConsumer>
      {({user, logOut}) => (
        <React.Fragment>
          
            <h2>Navbar</h2>
            {user.id ? (
              <React.Fragment>
                <small>User: {user.email}</small>
                <button onClick={(e) => logOut(e)}>Log Out</button>
              </React.Fragment>
            ) : (
              <small>Please Sign In</small>
            )}
            
       
        </React.Fragment>
      )}
      
    </AuthConsumer>
         
  )
}

export default Navbar;