import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css'

const options = [
  {
    label: 'Room Type A',
    value: 'typeA'
  },
  {
    label: 'Room Type B',
    value: 'typeB'
  }
]

class RoomTypeDropdown extends React.Component {
  
  render() {
    // const defaultOption = this.state.selected
    var message='You\'ve selected ';
    return (
      <div className="room-type-dropdown-form-wrapper">
        
        <form className="form">
         
          <div>
            <Dropdown 
              className='room-dropdown'
              options={options} 
              onChange={(option) => this._onSelect('rooms', 'typeB', option)}
              value={this.props.roomType} 
              name='typeB'
              placeholder="Select Room Type" 
            />
            <p>{message}</p>
          </div>

        </form>
                
      </div>
    )
  }

}

export default RoomTypeDropdown;