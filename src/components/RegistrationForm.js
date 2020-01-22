import React from 'react';
import { registrationsRef } from '../firebase';

class RegistrationForm extends React.Component {
  state = {
    userId: '',
    name: '',
    address: '',
    phone: '',
    email: '' 
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log(this.state)
    const newRegistration = await registrationsRef.add({ registration:this.state })
  }

  render() {
    return (
      <div className="registration-form-wrapper">
        <div>
          <h2>Registration Form</h2>
        </div>

        <form onSubmit={this.handleSubmit} className="form">
          <div>
            <input
              type='text'
              name='name'
              placeholder='First and Last Name'
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <input
              type='text'
              name='address'
              placeholder='Address'
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <input
              type='tel'
              name='phone'
              pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
              placeholder='Phone Number'
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <input
              type='email'
              name='email'
              placeholder='Email'
              onChange={this.handleInputChange}
            />
          </div>
          
          <button 
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

export default RegistrationForm;