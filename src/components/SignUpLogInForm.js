import React from 'react';
import { AuthConsumer } from './AuthContext';

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
                <p className='main-page-p'>
                  For over 30 years, the SFMA invades Charleston, South Carolina for a wild weekend filled with three different performances at Piccolo Spoleto, one of the world's largest arts and culture events. This year is no different! Memorial Day weekend Friday, May 22nd thru Monday May 25th, 2020 Seed & Feed will take on Spoleto in the way only Abominables know best. On Saturday, May 23rd, we will perform at the Children’s Festival in the middle of Piccolo Spoleto. That night, on the steps of the United States Custom House, we perform in front of a huge crowd people gathered for the Pajama March (yes, you hear right, pajamas). The following day, Sunday, May 24th, we celebrate Memorial Day with our Patriotic Parade on the steps of the Custom House. 
                </p>
                <p className='main-page-p'>
                  It’s a jam packed, incredible weekend no red blooded abominable will want to miss!
                </p>
                <p className='main-page-p'>
                  For Spoleto S&FMA has a great housing deal with the College of Charleston in downtown Charleston.
                </p>
                <p className='main-page-p'>
                  We're staying at George Street Dorms (dorm subject to change): <br/>
                  Each apartment has three to five fully furnished single-occupancy bedrooms with full-size beds, a fully furnished living room, a kitchen, and either one or two bathrooms. All units overlook an open courtyard. Each apartment has a full kitchen with a stove, full-size refrigerator, microwave, cabinets, sink with garbage disposal, and dishwasher. LINENS ARE NOT furnished, I repeat, you need to bring your own Full Size sheet. (Check in May 22 - Check out May 25)
                </p>
                <p className='main-page-p'>
                  Cost per room for the weekend is $187--bed can be shared but payment is in full per room. <br/>
                  Cost per car for parking one car for the weekend is $37--covers Friday to Monday<br/>
                  The combo room + car is $224 for the whole weekend. What a steal!<br/>                 
                </p>
                <p className='main-page-p'>
                  When you sign up you'll be able to specify who's paying for your reservation as well as the number of cars etc.
                </p>
                <p className='main-page-p'>
                  SUBSIDY - If you have completed 3 private gigs and 3 community gigs this year you qualify for a $70 subsidy. The 2020 subsidy has been set at $70. For details on performances please go here - http://bit.ly/2020GigsByStatus. 
                </p>
                {/* <p className='main-page-p'>
                  Each apartment has 3 to 5 fully furnished single occupancy bedrooms with full-size beds, a fully furnished living room, kitchen, and either one or two bathrooms. All units overlook an open courtyard. Each apartment has a full kitchen with a stove, full-size refrigerator, microwave, cabinets, sync with garbage disposal, and dishwasher. Linens are not furnished. (Check in May 26 Dash check out May 29)
                </p>
                <p className='main-page-p'>
                  Cost per person for a single occupancy room is $208 – – bed can be shared but payment is in full
                </p>
                <p className='main-page-p'>
                  Subsidy – if you have completed three private gigs and three community gigs this year you qualify for a $60 subsidy.
                </p> */}
                <p className='main-page-p'>
                  Thanks!! <br/>
                  Your Spoleto 2020 Czars
                </p>
                {/* <p className='main-page-p'>
                  Are you ready to sign up?
                </p> */}
                <h2>Sign In or Create Account</h2>
                {authMessage ? <span>{authMessage}</span> : ''}
                <form className='sign-up-form'>
                  <div>
                    <input
                      className='log-in-input'
                      ref={this.emailInput}
                      type='email'
                      name='email'
                      placeholder='Email'
                    />
                  </div>
                  <div>
                    <input
                      className='log-in-input'
                      ref={this.passwordInput}
                      type='password'
                      name='password'
                      placeholder='Password'
                    />
                  </div>
                  <div>
                    <button 
                      className="sign-up-button"
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