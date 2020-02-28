import React from 'react';
import { sleepingarrangementsRef, yourpeopleRef, aboutusersRef } from '../firebase';
import RoomTypeDropdown from '../components/RoomTypeDropdown';
// import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css'

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
    ]
  } 

  getPeopleData = async userId => {
    try{
      const personData = await yourpeopleRef
      .where('aboutUser.userId', '==', userId)
      .get()
      console.log(personData)
      const peopleNames = [
        ...personData.docs[0].data().aboutUser.adults.map(person => ({name: person.name, roomType: ''})),
        ...personData.docs[0].data().aboutUser.minors.map(person => ({name: person.name, roomType: ''}))
      ]
      this.setState({people: peopleNames})
    } catch(error){
      console.log('Error getting personData', error)
    }
  }

  componentDidMount(){
    this.getPeopleData(this.props.match.params.userId)
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log(this.props.match.params.userId)
    await sleepingarrangementsRef.add({ aboutPeople:{roomType: this.state.roomType, userId: this.props.match.params.userId} })
    
  }

  _onSelect = (stateKey, objectKey, option) => {
    console.log('You selected ', option)
    this.setState({[stateKey]: {...this.state[stateKey], [objectKey]: option.value}})
  }
  
  render() {
    const defaultOption = this.state.selected
    var message='You\'ve selected ';
    return (
      <div className="sleeping-arrangements-form-wrapper">
        <div>
          <h1>Sleeping Arrangements</h1>
        </div>

        <form onSubmit={this.handleSubmit} className="form">
     
          <div>           
            {this.state.people.map(person => (
              <div>
                <h6>{person.name}</h6>
                <RoomTypeDropdown />
              </div>
              ))}          
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