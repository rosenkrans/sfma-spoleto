import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css'

const options = [
  {
    label: 'Room Type A',
    value: 'typeA',
    id: 'roomTypeA'
  },
  {
    label: 'Room Type B',
    value: 'typeB',
    id: 'roomTypeB'
  }
]

class RoomTypeDropdown extends React.Component { 
  constructor(props){
    super(props);
    // console.log(props)
  }
  
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
              onChange={(e) => this.props.handleRoomType(e, this.props.personNum)}
              placeholder="Select Room Type" 
              value={(this.props.roomType)} 
              id={'roomType' + this.props.personNum}
            />
            {/* {console.log('this.props under dropdown', this.props)} */}
            
            <p>{message}</p>
            
          </div>
          
        </form>
                
      </div>
    )
  }

}

export default RoomTypeDropdown;