import React from 'react';
import { yourpeopleRef, abouttripsRef, aboutusersRef } from '../firebase'
import PersonInfoForm from './PersonInfoForm';
import { Link } from 'react-router-dom';

class Forms extends React.Component {
  state = {
    userId: '',
    createdAt: new Date(),
    
  }

  // getTripData = async userId => {
  //   // console.log(userId)
  //   try {
  //     const trip = await abouttripsRef
  //     .where('aboutTrip.userId', '==', userId)
  //     .get()
  //     console.log(trip)
  //     this.setState({trip: trip.docs[0].data().aboutTrip})
  //   } catch(error) {
  //     console.log('Error getting trips', error)
  //   }
  // }

  // getUserData = async userId => {
  //   try{
  //     const userOne = await aboutusersRef
  //     .where('aboutUser.userId', '==', userId)
  //     .get()
  //     console.log(userOne)
  //     this.setState({adults:[userOne.docs[0].data().aboutUser]})
  //   } catch(error){
  //     console.log('Error getting userOne', error)
  //   }
  // }

  // componentDidMount(){
  //   this.getTripData(this.props.match.params.userId)
  //   this.getUserData(this.props.match.params.userId)
  // }

  // handleInputChange = (personType, index, e) => {
  //   console.log(index)
  //   console.log(e)
  //   this.setState({
  //     [personType]: [
  //        ...this.state[personType].slice(0,index),
  //        Object.assign({}, this.state[personType][index], {[e.target.name]: e.target.value}),
  //        ...this.state[personType].slice(index+1)
  //     ]
  //   });
  // }

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log(this.props.match.params.userId)
    await yourpeopleRef.add({ aboutUser:{adults: this.state.adults, minors: this.state.minors, userId: this.props.match.params.userId} })
    this.props.history.push({
      pathname: `/${this.props.match.params.userId}/shoppingcart`
    })
  }

  render() {
    return (
      <div className="forms-form-wrapper">
        <div>
          <h1>Click the link below to fill out Health, Terms, and Parking forms</h1>
        </div>

        <div>
          {/* <p>http://bit.ly/Spoleto2020Forms</p> */}
          <a target = '_blank' href='http://bit.ly/Spoleto2020Forms'>GO TO FORMS</a>
          {/* <Link to='http://bit.ly/Spoleto2020Forms'><button>GO TO FORMS</button></Link> */}
        </div>
             
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

export default Forms;