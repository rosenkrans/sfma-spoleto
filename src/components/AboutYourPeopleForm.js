import React from 'react';
import { yourpeopleRef, abouttripsRef, aboutusersRef } from '../firebase'
import PersonInfoForm from './PersonInfoForm';

class AboutYourPeopleForm extends React.Component {
  state = { 
    adults: [
      {userId: '',
        name: '',
        email: '',
        phone: '',
        section: '',
        stipend: ''
      }
    ],    
    minors: [
      {userId: '',
        name: '',
        email: '',
        phone: '',
        section: '',
        stipend: ''
      }
    ],
    createdAt: new Date(),
    trip: {people:{
      adult: 0,
      minor: 0
    }}
  }

  getTripData = async userId => {
    // console.log(userId)
    try {
      const trip = await abouttripsRef
      .where('aboutTrip.userId', '==', userId)
      .get()
      console.log(trip)
      this.setState({trip: trip.docs[0].data().aboutTrip})
    } catch(error) {
      console.log('Error getting trips', error)
    }
  }

  getUserData = async userId => {
    try{
      const userOne = await aboutusersRef
      .where('aboutUser.userId', '==', userId)
      .get()
      console.log('user one', userOne)
      this.setState({adults:[userOne.docs[0].data().aboutUser], stipend: userOne.docs[0].data().aboutUser.stipend})
      console.log('user one data', userOne.docs[0].data().aboutUser)
    } catch(error){
      console.log('Error getting userOne', error)
    }
  }

  componentDidMount(){
    this.getTripData(this.props.match.params.userId)
    this.getUserData(this.props.match.params.userId) 
  }

  handleInputChange = (personType, index, e) => {
    console.log(index)
    console.log(e)
    this.setState({
      [personType]: [
         ...this.state[personType].slice(0,index),
         Object.assign({}, this.state[personType][index], {[e.target.name]: e.target.value}),
         ...this.state[personType].slice(index+1)
      ]
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log(this.props.match.params.userId)
    await yourpeopleRef.add({ aboutUser:{adults: this.state.adults, minors: this.state.minors, userId: this.props.match.params.userId} })
    this.props.history.push({
      pathname: `/${this.props.match.params.userId}/sleepingarrangements`
    })
  }

  render() {
    return (
      <div className="about-people-form-wrapper">
        <div>
          <h1>Tell us about your people</h1>
        </div>
        
        {/* pass a prop of person to the person info form */}
        {Array(this.state.trip.people.adult).fill().map((x, index) => { 
          return(
            <div key={index}>
              <h2>Adult #{index+1}</h2>
              <PersonInfoForm personType="adults" formData={this.state.adults[index] || {}} index={index} handleInputChange={this.handleInputChange} />
            </div>
          )
        })}

        {Array(this.state.trip.people.minor).fill().map((x, index) => { 
          return(
            <div key={index}>
              <h2>Minor #{index+1}</h2>
              <PersonInfoForm personType="minors" formData={this.state.minors[index] || {}} index={index} handleInputChange={this.handleInputChange} />
            </div>
          )
        })}
              
        <button 
          onClick={this.handleSubmit}
          className='btn btn-primary'
          type='submit' 
          value='Submit'
        >
          Submit
        </button>
                
      </div>
    )
  }
}

export default AboutYourPeopleForm;