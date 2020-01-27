import React from 'react';
import { aboutusersRef } from '../firebase';

class AboutYourPeopleForm extends React.Component {
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
      <div className="about-people-form-wrapper">
        <div>
          <h1>Tell us about your people</h1>
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
            <div>
              <label>
                <input
                  type="radio"
                  name="stipend"
                  value="yes"
                  checked={this.state.stipend === "yes"}
                  onChange={this.handleInputChange}
                />
                Apply Stipend
              </label>
            </div>
​
            <div>
              <label>
                <input
                  type="radio"
                  name="stipend"
                  value="no"
                  checked={this.state.stipend === "no"}
                  onChange={this.handleInputChange}
                />
                No Stipend
              </label>
            </div>
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
export default AboutYourPeopleForm;