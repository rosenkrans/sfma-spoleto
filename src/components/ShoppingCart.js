import React from 'react';
import { abouttripsRef, shoppingcartRef, yourpeopleRef } from '../firebase';

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
      
      this.setState({
        nights: (data.aboutTrip.checkOut.seconds - data.aboutTrip.checkIn.seconds) / 86400,
        rooms: data.aboutTrip.rooms,
        parking: data.aboutTrip.parking.spot,
        total: (((data.aboutTrip.rooms * 100) + (data.aboutTrip.parking.spot * 37)) * ((data.aboutTrip.checkOut.seconds - data.aboutTrip.checkIn.seconds) / 86400)) - (this.state.stipend)      
      })
      // console.log('parking spots: ', parking)
    } catch(error){
      console.log('Error getting room or parking', error)
    }
  }

  getStipendData = async userId => {
    try{
      const stipendData = await yourpeopleRef
      .where('aboutUser.userId', '==', userId)
      .get()
      const stipendInfo = stipendData.docs[0].data()
      console.log('stipend data', stipendInfo.aboutUser.adults)
      const amountStipend = stipendInfo.aboutUser.adults.reduce((acc, adult) => adult.stipend ? acc + 70 : acc, 0)
      console.log("stipend money", amountStipend)
      this.setState({
        stipend: amountStipend
      })
    } catch(error){
      console.log('Error getting stipend', error)
    }
  }

  componentDidMount(){
    this.getStipendData(this.props.match.params.userId)
    this.getTripCartData(this.props.match.params.userId)   
  }

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
            SUBMIT
          </button>
        </form>
                
      </div>
    )
  }
}

export default ShoppingCart;