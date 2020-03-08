import React from 'react';
import { sleepingarrangementsRef, yourpeopleRef, aboutusersRef, shoppingcartRef } from '../firebase';

import 'react-dropdown/style.css'

class ShoppingCart extends React.Component {
  // constructor(props){

  //   super(props);
  //   this.state = {
  //     userId: '',
  //     createdAt: new Date(),
  //     roomType: '',
  //     groupName: '',
  //     people: [
  //     ]
  //   } 
  //   this.handleRoomType = this.handleRoomType.bind(this)
  // }

  // componentDidMount(){
  //   this.getPeopleData(this.props.match.params.userId)
    
  // }

  // getCartData = async userId => {
  //   try{
  //     const cartData = await yourpeopleRef
  //     .where('aboutUser.userId', '==', userId)
  //     .get()
  //     console.log(personData)
  //     const peopleNames = [
  //       ...personData.docs[0].data().aboutUser.adults.map(person => ({name: person.name, roomType: ''})),
  //       ...personData.docs[0].data().aboutUser.minors.map(person => ({name: person.name, roomType: ''}))
  //     ]
  //     this.setState({people: peopleNames})
  //   } catch(error){
  //     console.log('Error getting personData', error)
  //   }
  // }

  handleInputChange = (e) => {
    
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    
    await shoppingcartRef.add(this.state)
    
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
            <p>Number of Type A Rooms: X $__</p>
            <p>Number of Type B Rooms: X $__</p>
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