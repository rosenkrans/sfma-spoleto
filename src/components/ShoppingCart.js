import React from 'react';
import { abouttripsRef, shoppingcartRef } from '../firebase';

import 'react-dropdown/style.css'

class ShoppingCart extends React.Component {

    state = {
      userId: '',
      createdAt: new Date(),
      nights: 0,
      rooms: 0,
      parking: 0, 
      total: 0,
      stipend: 0
    } 

  getTripCartData = async userId => {
    
    try{
      const tripData = await abouttripsRef
      .where('aboutTrip.userId', '==', userId)
      .get()
      console.log('tripData', tripData.docs[0].data())   
      const data = tripData.docs[0].data()  
      // console.log('abouttrips', aboutTrip)
      // this.setState({roomTypeA: tripData.docs[0].data().aboutTrip.rooms.typeA})
      // console.log('room A is: ', roomTypeA)
      
      // this.setState({parking: tripData.docs.data()})
      this.setState({
        nights: (data.aboutTrip.checkOut.seconds - data.aboutTrip.checkIn.seconds) / 86400,
        rooms: data.aboutTrip.rooms,
        parking: data.aboutTrip.parking.spot,
        total: ((data.aboutTrip.rooms * 100) + (data.aboutTrip.parking.spot * 37)) * ((data.aboutTrip.checkOut.seconds - data.aboutTrip.checkIn.seconds) / 86400)
        
      })
      // console.log('parking spots: ', parking)
    } catch(error){
      console.log('Error getting room or parking', error)
    }
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

  componentDidMount(){
    this.getTripCartData(this.props.match.params.userId)
  }

  // handleInputChange = (e) => {
    
  // }

  handleSubmit = async (e) => {
    e.preventDefault();   
    // await shoppingcartRef.add(this.state)
    this.props.history.push({
      pathname: `/${this.props.match.params.userId}/forms`
    })
  }

  
 
  render() {
    
    return (
      <div className="sleeping-arrangements-form-wrapper">
        <div>
          <h1>Shopping Cart</h1>
        </div>

        <form onSubmit={this.handleSubmit} className="form">

          <div>
            <h3>Please check your information below</h3>
          </div>

          <div>
            <p>Number of Nights: {this.state.nights}</p>
            <p>Number of Rooms: {this.state.rooms} $100</p>
            
            <p>Number of Parking Spots: {this.state.parking} $37</p>
            <p>Stipend to subtract: ${this.state.stipend}</p>
            <p>Here is your total: ${this.state.total}</p>
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

export default ShoppingCart;