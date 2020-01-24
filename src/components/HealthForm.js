import React from 'react';
import { healthsRef } from '../firebase';

class HealthForm extends React.Component {
  state = {
    userId: '',
    createdAt: new Date(),
    name: '',
    allergies: '',
    medConditions: '',
    medications: '',
    medInstructions: ''
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log(this.props.match.params.userId)
    const newHealth = await healthsRef.add({ health:{...this.state, userId: this.props.match.params.userId} })
  }

  render() {
    return (
      <div className="health-form-wrapper">
        <div>
          <h1>Health Form</h1>
        </div>

        <form onSubmit={this.handleSubmit} className="form">
          <div>
            <input
              className='health-input'
              type='text'
              name='name'
              placeholder='First and Last Name'
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <input
              className='health-input'
              type='text'
              name='allergies'
              placeholder='Allergies'
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <input
              className='health-input'
              type='text'
              name='medConditions'              
              placeholder='Medical Conditions'
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <input
              className='health-input'
              type='text'
              name='medications'
              placeholder='Medications'
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <input
              className='health-input'
              type='text'
              name='medInstructions'
              placeholder='Medical Instructions'
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

export default HealthForm;