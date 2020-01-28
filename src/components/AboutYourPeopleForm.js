import React from 'react';
import { yourpeopleRef, abouttripsRef } from '../firebase'
import PersonInfoForm from './PersonInfoForm';

class AboutYourPeopleForm extends React.Component {
  state = {
    people: [
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
      adult: 0
    }}
  }



  getTripData = async userId => {
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

  componentDidMount(){
    this.getTripData(this.props.match.params.userId)
  }

  handleInputChange = (index, e) => {
    console.log(index)
    console.log(e)
    this.setState({
      people: [
         ...this.state.people.slice(0,index),
         Object.assign({}, this.state.people[index], {[e.target.name]: e.target.value}),
         ...this.state.people.slice(index+1)
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
        
        {Array(this.state.trip.people.adult).fill().map((x, index) => <PersonInfoForm index={index} handleInputChange={this.handleInputChange} />)}
          
        <button 
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