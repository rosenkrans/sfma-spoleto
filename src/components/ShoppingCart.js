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