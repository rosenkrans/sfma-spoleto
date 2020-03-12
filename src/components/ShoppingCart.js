import React from 'react';
import { abouttripsRef, shoppingcartRef } from '../firebase';

import 'react-dropdown/style.css'

class ShoppingCart extends React.Component {

    state = {
      userId: '',
      createdAt: new Date(),
      // room: {rooms:{
      //   typeA: 0,
      //   typeB: 0
      // }},
      // parkings: {parking: {
      //   spot: 0
      // }}
      roomTypeA: 0,
      roomTypeB: 0, 
      parking: 0
    } 

  getTripCartData = async userId => {
    try{
      const tripData = await abouttripsRef
      .where('aboutTrip.userId', '==', userId)
      .get()
      console.log(tripData)     
      this.setState({roomTypeA: tripData.docs[0].data().aboutTrip.rooms.typeA})
      // console.log('room A is: ', roomTypeA)
      // this.setState({roomTypeB: tripData.docs.data()})
      // console.log('room B is: ', roomTypeB)
      // this.setState({parking: tripData.docs.data()})
      // console.log('parking spots: ', parking)
    } catch(error){
      console.log('Error getting room or parking', error)
    }
  }

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
            <p>Number of Rooms: X $__</p>
            <p>Number of Nights: X $__</p>
            <p>Number of Parking Spots: X $__</p>
            <p>Here is your total: $__</p>
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