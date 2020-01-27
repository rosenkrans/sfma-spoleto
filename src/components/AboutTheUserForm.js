import React from 'react';
import { aboutusersRef } from '../firebase';
import { RadioGroup, RadioButton } from 'react-radio-buttons';

class AboutTheUserForm extends React.Component {
  state = {
    userId: '',
    createdAt: new Date(),
    name: '',
    email: '',
    phone: '',
    section: '',
    stipend: ''
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
          <h1>First, tell us about you</h1>
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
          <div>
            <input
              className='about-input'
              type='email'
              name='email'
              placeholder='Email'
              onChange={this.handleInputChange}
            />
          </div>
          
          <div>
            <input
              className='about-input'
              type='tel'
              name='phone'
              pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
              placeholder='Phone Number'
              onChange={this.handleInputChange}
            />
          </div>
          <div>
          <input
              className='about-input'
              type='text'
              name='section'
              placeholder='Instrument Section'
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <RadioGroup onChange={ this.onChange } className="radio-buttons">
              <RadioButton 
                className='about-input'
                type='radio'
                name='stipend'
                value="yes"
                onChange={this.handleInputChange}
              >
                Apply Stipend
              </RadioButton>
              <RadioButton 
                className='about-input'
                type='radio'
                name='stipend'
                value="no"
                onChange={this.handleInputChange}
              >
                No Stipend
              </RadioButton>
            </RadioGroup>
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

export default AboutTheUserForm;