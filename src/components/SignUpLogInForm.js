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
                  For over 30-ish years, the SFMA invades Charleston South Carolina for a wild weekend filled with three different performances at Spoleto, one of the worlds largest arts and culture events. This year is no different! Memorial day weekend Friday, May 26 through Monday, May 29, 2020 Seed and Feed Community gone Spoleto in the way only Abominable‘s know best. On Saturday, May 27, we will perform at the children’s Festival in the middle of piccolo Spoleto. That night, on the steps of the United States customhouse, we perform in front of a huge crowd of people gathered for the pajama March (yes, you hear right, pajamas). The following day, Sunday, May 28, we celebrate memorial day with our patriotic parade on the steps of the custom house.
                </p>
                <p className='main-page-p'>
                  It’s a jam packed, incredible weekend no red blooded abominable will want to miss!
                </p>
                <p className='main-page-p'>
                  For Spoleto SFM a has a great housing deal with the days inn on meeting Street in the college of Charleston in downtown Charleston.
                </p>
                <p className='main-page-p'>
                  For the days inn: <br/>
                  Each room has two double beds (comfortably sleep two people in each). There are some rooms with king size beds. Please note if you would like to be assigned one of these. All rooms are now non-smoking. (Check in May 26 Dash check out May 29)
                </p>
                <p className='main-page-p'>
                  Cost per room $720 (with one car, additional cars are subject to $14 a night charge) <br/>
                  $720 total if you’re not sharing the room <br/>
                  $360 per person if two people sharing <br/>
                  $240 per person if three people sharing <br/>
                  $180 per person if four people sharing <br/>
                </p>
                <p className='main-page-p'>
                  Amenities including hotel room: newly renovated rooms, free parking (one spot per guest room), free Wi-Fi, outdoor pool, coffee maker, microwave, fridge, new bathrooms, towels, bedding, air-conditioning, and outdoor balcony.
                </p>
                <p className='main-page-p'>
                  For the college of Charleston Dash George Street dorms (dorm subject to change):
                </p>
                <p className='main-page-p'>
                  Each apartment has 3 to 5 fully furnished single occupancy bedrooms with full-size beds, a fully furnished living room, kitchen, and either one or two bathrooms. All units overlook an open courtyard. Each apartment has a full kitchen with a stove, full-size refrigerator, microwave, cabinets, sync with garbage disposal, and dishwasher. Linens are not furnished. (Check in May 26 Dash check out May 29)
                </p>
                <p className='main-page-p'>
                  Cost per person for a single occupancy room is $208 – – bed can be shared but payment is in full
                </p>
                <p className='main-page-p'>
                  Subsidy – if you have completed three private gigs and three community gigs this year you qualify for a $60 subsidy.
                </p>
                <p className='main-page-p'>
                  Fill out the form below to reserve your room. We will be following up with you shortly to collect payments!
                </p>
                <p className='main-page-p'>
                  Are you ready to sign up?
                </p>
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