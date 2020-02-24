import React from 'react';
import { yourpeopleRef, abouttripsRef } from '../firebase'
import PersonInfoForm from './PersonInfoForm';

class AboutYourPeopleForm extends React.Component {
  state = {
    person: [
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
    console.log(userId)
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

  // getPersonData = async userId => {

  // }

  componentDidMount(){
    this.getTripData(this.props.match.params.userId)
  }

  handleInputChange = (index, e) => {
    console.log(index)
    console.log(e)
    this.setState({
      person: [
         ...this.state.person.slice(0,index),
         Object.assign({}, this.state.person[index], {[e.target.name]: e.target.value}),
         ...this.state.person.slice(index+1)
      ]
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log(this.props.match.params.userId)
    const newYourPeople = await yourpeopleRef.add({ aboutUser:{...this.state, userId: this.props.match.params.userId} })
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
        <div>
          <h2>Adult #{index+1}</h2>
          <PersonInfoForm index={index} handleInputChange={this.handleInputChange} />
        </div>
      )
    })}

    {Array(this.state.trip.people.minor).fill().map((x, index) => { 
      return(
        <div>
          <h2>Minor #{index+1}</h2>
          <PersonInfoForm index={index} handleInputChange={this.handleInputChange} />
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