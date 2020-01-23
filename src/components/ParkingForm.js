import React from 'react';
import { parkingsRef } from '../firebase';

class ParkingForm extends React.Component {
  state = {
    userId: '',
    createdAt: new Date(),
    name: '',
    parkingNum: '',
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log(this.props.match.params.userId)
    const newParking = await parkingsRef.add({ parking:{...this.state, userId: this.props.match.params.userId} })
  }

  render() {
    return (      
      <div className="parking-form-wrapper">       
        <div>
          <h1>Parking Form</h1>
        </div>

        <form onSubmit={this.handleSubmit} className="form">
          <div>
            <input
              className='parking-input'
              type='text'
              name='name'
              placeholder='First and Last Name'
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <input
              className='parking-input'
              type='text'
              name='parkingNum'
              placeholder='Number of Parking Spots'
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

export default ParkingForm;