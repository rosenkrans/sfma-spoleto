import React from 'react';
import { abouttripsRef } from '../firebase';
import DatePicker from 'react-date-picker' 
import Dropdown from 'react-dropdown';

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
    const newAboutTrip = await abouttripsRef.add({ aboutTrip:{...this.state, userId: this.props.match.params.userId} })
  }

  onSelect = (e) => {
    const options = [
      '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'
    ]
    const defaultOption = options[0]
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  

  render() {
    return (
      <div className="about-trip-form-wrapper">
        <div>
          <h1>Tell us about your trip</h1>
        </div>

        <form onSubmit={this.handleSubmit} className="form">
          <div>
            <DatePicker />
          </div>
          <div>
            <DatePicker />
          </div>
          <div>
            <Dropdown 
              options={this.options} 
              onChange={this._onSelect} 
              value={this.defaultOption} 
              placeholder="Rooms Type A" 
            />
          </div>
          <div>
            <Dropdown 
              options={this.options} 
              onChange={this._onSelect} 
              value={this.defaultOption} 
              placeholder="Rooms Type B" 
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