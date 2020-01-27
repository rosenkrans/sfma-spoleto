import React from 'react';
import { abouttripsRef } from '../firebase';
import DatePicker from 'react-date-picker' 
import Dropdown from 'react-dropdown';

const options = [
  {
    label: '0',
    value: 0
  },
  {
    label: '1',
    value: 1
  }, 
  {
    label: '2',
    value: 2
  }, 
  {
    label: '3',
    value: 3
  },
  {
    label: '4',
    value: 4
  },
  {
    label: '5',
    value: 5
  },
  {
    label: '6',
    value: 6
  },
  {
    label: '7',
    value: 7
  },
  {
    label: '8',
    value: 8
  }
]

class AboutTheTripForm extends React.Component {
  state = {
    userId: '',
    createdAt: new Date(),
    checkIn: new Date(),
    checkOut: new Date(),
    rooms: {
      typeA: '',
      typeB: ''
    },
    people: {
      adult: '',
      minor: ''
    },
    parking: {
      spot: ''
    }
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

  handleDateChange(dateName, dateValue) {
    let { checkIn, checkOut } = this.state;
    if (dateName === 'checkIn') {
      checkIn = dateValue;
    } else {
      checkOut = dateValue;
    }
    this.setState({
      checkIn,
      checkOut,
    });
  }

  _onSelect = (stateKey, objectKey, option) => {
    console.log('You selected ', option)
    this.setState({[stateKey]: {...this.state[stateKey], [objectKey]: option.value}})
  }
  
  render() {
    const defaultOption = this.state.selected
    var message='You\'ve selected ';
    return (
      <div className="about-trip-form-wrapper">
        <div>
          <h1>Tell us about your trip</h1>
        </div>

        <form onSubmit={this.handleSubmit} className="form">
          <div>
            <p>Check-In Date</p>
            <DatePicker 
              className='trip-datepicker'
              value={this.state.checkIn}
              name='checkIn'
              selected={this.state.checkIn}
              value={this.state.checkIn}
              onChange={date => this.handleDateChange('checkIn', date)}
            />
          </div>
          <div>
            <p>Check-Out Date</p>
            <DatePicker 
              className='trip-datepicker'
              value={this.state.checkOut}
              name='checkOut'
              selected={this.state.checkOut}
              value={this.state.checkOut}
              onChange={date => this.handleDateChange('checkOut', date)}
            />
          </div>

          <div>
            <Dropdown 
              className='trip-dropdown'
              options={options} 
              onChange={(option) => this._onSelect('rooms', 'typeA', option)}
              value={defaultOption} 
              name='typeA'
              placeholder="Room Type A: $100/night" 
            />
            <p>{message} {this.state.rooms.typeA} typeA rooms</p>
          </div>
          <div>
            <Dropdown 
              className='trip-dropdown'
              options={options} 
              onChange={(option) => this._onSelect('rooms', 'typeB', option)}
              value={defaultOption} 
              name='typeB'
              placeholder="Room Type B: $200/night" 
            />
          </div>

          <div>
            <Dropdown 
              className='trip-dropdown'
              options={options} 
              onChange={(option) => this._onSelect('people', 'adult', option)}
              value={defaultOption} 
              name='adult'
              placeholder="Number of Adults" 
            />
          </div>
          <div>
            <Dropdown 
              className='trip-dropdown'
              options={options} 
              onChange={(option) => this._onSelect('people', 'minor', option)}
              value={defaultOption} 
              name='minor'
              placeholder="Number of Minors" 
            />
          </div>

          <div>
            <Dropdown 
              className='trip-dropdown'
              options={options} 
              value={defaultOption} 
              onChange={(option) => this._onSelect('parking', 'spot', option)}
              name='parking'
              placeholder="Number of Parking Spots" 
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