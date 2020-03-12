import React from 'react';
import { abouttripsRef } from '../firebase';
import DatePicker from 'react-date-picker' 
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css'

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
    rooms: 0,
    people: {
      adult: 0,
      minor: 0
    },
    parking: {
      spot: 0
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
    await abouttripsRef.add({ aboutTrip:{...this.state, userId: this.props.match.params.userId} })
    this.props.history.push({
      pathname: `/${this.props.match.params.userId}/yourpeople`
    })
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

  _onSelectRooms = (stateKey, objectKey, option) => {
    console.log('statekey', stateKey)
    console.log('objectKey', objectKey)
    console.log('option', option)
    this.setState({rooms: objectKey.value}, ()=>{console.log('state: ', this.state)})
    
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
              name='checkOut'
              selected={this.state.checkOut}
              value={this.state.checkOut}
              onChange={date => this.handleDateChange('checkOut', date)}
            />
          </div>

          <div>
            {/* <label htmlFor="">Select Room Type A: $100/night</label> */}
            <Dropdown 
              className='trip-dropdown'
              options={options} 
              onChange={(option) => this._onSelectRooms('rooms', option)}
              value={defaultOption} 
              name='rooms'
              placeholder="Select Number of Rooms: $100/night" 
            />
            <p>{message} {this.state.rooms} rooms</p>
          </div>
          {/* <div>
          <label htmlFor="">Room Type B: $200/night</label>
            <Dropdown 
              className='trip-dropdown'
              options={options} 
              onChange={(option) => this._onSelect('rooms', 'typeB', option)}
              value={defaultOption} 
              name='typeB'
              placeholder="Room Type B: $200/night" 
            />
            <p>{message} {this.state.rooms.typeB} typeB rooms</p>
          </div> */}

          <div>
          {/* <label htmlFor="">Number of Adults</label> */}
            <Dropdown 
              className='trip-dropdown'
              options={options} 
              onChange={(option) => this._onSelect('people', 'adult', option)}
              value={defaultOption} 
              name='adult'
              placeholder="Number of Adults" 
            />
            <p>{message} {this.state.people.adult} Adults</p>
          </div>
          <div>
            {/* <label htmlFor="">Number of Minors</label> */}
            <Dropdown 
              className='trip-dropdown'
              options={options} 
              onChange={(option) => this._onSelect('people', 'minor', option)}
              value={defaultOption} 
              name='minor'
              placeholder="Number of Minors" 
            />
            <p>{message} {this.state.people.minor} Minors</p>
          </div>

          <div>
            {/* <label htmlFor="">Number of Parking Spots</label> */}
            <Dropdown 
              className='trip-dropdown'
              options={options} 
              value={defaultOption} 
              onChange={(option) => this._onSelect('parking', 'spot', option)}
              name='parking'
              placeholder="Number of Parking Spots" 
            />
            <p>{message} {this.state.parking.spot} Parking Spots</p>
          </div>
                   
          <button 
            onClick={this.handleSubmit}
            className='btn btn-primary'
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