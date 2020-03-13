import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css'

const options = [
  // {
  //   label: 'Room Type A',
  //   value: 'typeA',
  //   id: 'roomTypeA'
  // },
  // {
  //   label: 'Room Type B',
  //   value: 'typeB',
  //   id: 'roomTypeB'
  // },
  {
    label: 'Room 1',
    value: 'room1',
    id: 'roomNum1'
  },
  {
    label: 'Room 2',
    value: 'room2',
    id: 'roomNum2'
  },
  {
    label: 'Room 3',
    value: 'room3',
    id: 'roomNum3'
  },
  {
    label: 'Room 4',
    value: 'room4',
    id: 'roomNum4'
  },
  {
    label: 'Room 5',
    value: 'room5',
    id: 'roomNum5'
  },
  {
    label: 'Room 6',
    value: 'room6',
    id: 'roomNum6'
  },
  {
    label: 'Room 7',
    value: 'room7',
    id: 'roomNum7'
  },
  {
    label: 'Room 8',
    value: 'room8',
    id: 'roomNum8'
  },
  {
    label: 'Room 9',
    value: 'room9',
    id: 'roomNum9'
  },
  {
    label: 'Room 10',
    value: 'room10',
    id: 'roomNum10'
  }
]

class RoomTypeDropdown extends React.Component { 
  constructor(props){
    super(props);
  }
  
  render() {

    var message='You\'ve selected ';
    return (
      <div className="room-type-dropdown-form-wrapper">
        
        <form className="form">
         
          <div>
            <Dropdown 
              className='room-dropdown'
              options={options} 
              onChange={(e) => this.props.handleRoomType(e, this.props.personNum)}
              placeholder="Select Room" 
              value={(this.props.roomType)} 
              id={'roomType' + this.props.personNum}
            />
            
            <p>{message}  </p>
            
          </div>
          
        </form>
                
      </div>
    )
  }

}

export default RoomTypeDropdown;