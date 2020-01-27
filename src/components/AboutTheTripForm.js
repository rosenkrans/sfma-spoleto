import React from 'react';
import { aboutusersRef } from '../firebase';

class AboutTheTripForm extends React.Component {
  state = {
    userId: '',
    createdAt: new Date(),
    checkIn: '',
    checkOut: '',
    rooms: '',
    people: '',
    parking: ''
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log(this.props.match.params.userId)
    const newAboutUser = await aboutusersRef.add({ aboutUser:{...this.state, userId: this.props.match.params.userId} })
  }

  render() {
    return (
      <div className="about-user-form-wrapper">
        <div>
          <h1>Tell us about your trip</h1>
        </div>

        <form onSubmit={this.handleSubmit} className="form">
          <div>
            <input
              className='about-input'
              type='text'
              name='name'
              placeholder='First and Last Name'
              onChange={this.handleInputChange}
            />
          </div>
          
          <button 
            className='submit-button'
            type='submit' 
            value='Submit'
          >
            Submit
          </button>
        </form>
                
      </div>
    )
  }

}

export default AboutTheTripForm;