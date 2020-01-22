import React from 'react';
import { AuthConsumer } from './AuthContext';
import { longStackSupport } from 'q';

class SignUpLogInForm extends React.Component {
  emailInput = React.createRef()
  passwordInput = React.createRef()

  redirect = () => {
    this.props.history.push(`/dashboard`)
    // this.props.history.push(`/${userId}/dashboard`)
  }

  render() {
    return (
      <AuthConsumer>
        {({signUp, logIn, user, authMessage, logOut}) => (
          <React.Fragment>
            {!user.id ? (
              <div className='sign-up-wrapper'>
                <h2>Sign In or Create Account</h2>
                {authMessage ? <span>{authMessage}</span> : ''}
                <form className='sign-up-form'>
                  <div>
                    <input
                      ref={this.emailInput}
                      type='email'
                      name='email'
                      placeholder='Email'
                    />
                  </div>
                  <div>
                    <input
                      ref={this.passwordInput}
                      type='password'
                      name='password'
                      placeholder='Password'
                    />
                  </div>
                  <div>
                    <button 
                      onClick={(e) => logIn(
                        this.emailInput.current.value,
                        this.passwordInput.current.value,
                        e
                      )}
                    >
                      Login
                    </button>
                    <button 
                      onClick={(e) => signUp(
                        this.emailInput.current.value,
                        this.passwordInput.current.value,
                        e
                      )}
                    >
                      Sign Up
                    </button>
                  </div>
                  
                </form>

              </div>
            ) : (
              <div>
                <button onClick={() => this.redirect()}>Go to My Dashboard</button>
                <button onClick={logOut}>Log Out</button>
              </div>
            )}
          </React.Fragment>
        )}
      </AuthConsumer>
    )
  }
}

export default SignUpLogInForm;