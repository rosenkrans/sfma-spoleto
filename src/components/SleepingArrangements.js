import React from 'react';
import { yourpeopleRef } from '../firebase';
import RoomTypeDropdown from '../components/RoomTypeDropdown';
// import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css'

// const options = [
//   {
//     label: 'Room Type A',
//     value: 'typeA'
//   },
//   {
//     label: 'Room Type B',
//     value: 'typeB'
//   }
// ]

class SleepingArrangements extends React.Component {
  state = {
    userId: '',
    createdAt: new Date(),
    roomType: {
      typeA: 'typeA',
      typeB: 'typeB'
    },
    groupName: '',
    people: [
      {
        personName: ''
      }
    ]
  }

  // getPeopleData = async userId => {
  //   try{
  //     const personData = await yourpeopleRef
  //     .where('aboutUser.userId', '==', userId)
  //     .get()
  //     console.log(personData)
  //     this.setState({people:[personName.docs[0].data().aboutUser]})
  //   } catch(error){
  //     console.log('Error getting personData', error)
  //   }
  // }

  // componentDidMount(){
  //   this.getPeopleData(this.props.match.params.userId)
  // }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log(this.props.match.params.userId)
    await sleepingarrangementsRef.add({ aboutPeople:{...this.state, userId: this.props.match.params.userId} })
    
  }

  _onSelect = (stateKey, objectKey, option) => {
    console.log('You selected ', option)
    this.setState({[stateKey]: {...this.state[stateKey], [objectKey]: option.value}})
  }
  
  render() {
    // const defaultOption = this.state.selected
    // var message='You\'ve selected ';
    return (
      <div className="sleeping-arrangements-form-wrapper">
        <div>
          <h1>Sleeping Arrangements</h1>
        </div>

        <form onSubmit={this.handleSubmit} className="form">

          <div>
          {Array(this.state.people.personName).fill().map((x, index) => { 
            return(
              <div key={index}>
                <h2>Person{index+1}</h2>
          
              </div>
            )
          })}
           
          </div>
          <div>
            <h6>Person Name will show here</h6>
            <RoomTypeDropdown />
            {/* <Dropdown 
              className='room-dropdown'
              options={options} 
              onChange={(option) => this._onSelect('rooms', 'typeB', option)}
              value={defaultOption} 
              name='typeB'
              placeholder="Select Room Type" 
            />
            <p>{message}</p> */}
          </div>

          <div>
            <h6>Group Name (Optional)</h6>
            <input type='text'/>
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

export default SleepingArrangements;