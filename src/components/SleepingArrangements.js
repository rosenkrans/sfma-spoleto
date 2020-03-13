import React from 'react';
import { sleepingarrangementsRef, yourpeopleRef, } from '../firebase';
import RoomTypeDropdown from '../components/RoomTypeDropdown';
import 'react-dropdown/style.css'

class SleepingArrangements extends React.Component {
  constructor(props){

    super(props);
    this.state = {
      userId: '',
      createdAt: new Date(),
      roomType: '',
      groupName: '',
      people: [
      ]
    }
    this.handleRoomType = this.handleRoomType.bind(this)
  } 

  handleRoomType(e, index) {
    this.setState({['roomType' + index]: e.label}, () => console.log('this.state', this.state));
  }

  getPeopleData = async userId => {
    try{
      const personData = await yourpeopleRef
      .where('aboutUser.userId', '==', userId)
      .get()
      console.log('personData:', personData)
      const peopleNames = [
        ...personData.docs[0].data().aboutUser.adults.map(person => ({name: person.name, roomType: ''})),
        ...personData.docs[0].data().aboutUser.minors.map(person => ({name: person.name, roomType: ''}))
      ]
      this.setState({people: peopleNames, userId: userId})
    } catch(error){
      console.log('Error getting personData', error)
    }
  }

  componentDidMount(){
    this.getPeopleData(this.props.match.params.userId)
    console.log('current state from roomType: ', this.state)
    console.log('props', this.props)
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log(this.props.match.params.userId)
    console.log('handle submit this.state', this.state)
    let myArray = [];
    // await sleepingarrangementsRef.add({ aboutPeople:{roomType: this.state.roomType, groupName: this.state.groupName, userId: this.props.match.params.userId} })
    await sleepingarrangementsRef.add(this.state)
    this.props.history.push({
      pathname: `/${this.props.match.params.userId}/shoppingcart`
    })
  }

  _onSelect = (stateKey, option) => {
    console.log('You selected ', option)
    this.setState({[stateKey]: option.value})
    // console.log(option.value)
  }

  onGroupNameChange = (e) => {
    // console.log(e.target.value)
    this.setState({groupName: e.target.value})
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
            {this.state.people.map((person, index) => (
              <div>
                <h6>{person.name}</h6>
                <RoomTypeDropdown personNum={index} handleRoomType={this.handleRoomType} roomType={this.state.roomType} />
              </div>
              ))}          
          </div> 

          <div>
            <h6>Group Name (Optional)</h6>
            <input type='text' onChange={this.onGroupNameChange}/>
          </div>
         
          <button 
            onClick={this.handleSubmit}
            className='btn btn-primary'
            type='submit' 
            value='Submit'
          >
            NEXT
          </button>
        </form>
                
      </div>
    )
  }
}

export default SleepingArrangements;