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

class SleepingArrangements extends React.Component {
  state = {
    userId: '',
    createdAt: new Date(),
    roomType: {
      typeA: 'typeA',
      typeB: 'typeB'
    }   
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  // handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log(this.props.match.params.userId)
  //   await yourpeopleRef.add({ aboutPeople:{...this.state, userId: this.props.match.params.userId} })
    
  // }

  _onSelect = (stateKey, objectKey, option) => {
    console.log('You selected ', option)
    this.setState({[stateKey]: {...this.state[stateKey], [objectKey]: option.value}})
  }
  
  render() {
    const defaultOption = this.state.selected
    var message='You\'ve selected ';
    return (
      <div className="sleeping-arrangements-form-wrapper">
        
        <form className="form">
         
          <div>
            <Dropdown 
              className='room-dropdown'
              options={options} 
              onChange={(option) => this._onSelect('rooms', 'typeB', option)}
              value={defaultOption} 
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

export default SleepingArrangements;