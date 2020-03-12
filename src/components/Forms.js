import React from 'react';
import { yourpeopleRef, abouttripsRef, aboutusersRef } from '../firebase'
import PersonInfoForm from './PersonInfoForm';
import { Link } from 'react-router-dom';

class Forms extends React.Component {
  state = {
    userId: '',
    createdAt: new Date()   
  }

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
          <h1>Don't forget to fill out forms!</h1>
          <h3>Click the below link for Health, Terms, and Parking forms</h3>
          <h3>Fill out one form for each person in your registration</h3>
        </div>

        <div>
          <a target = '_blank' href='http://bit.ly/Spoleto2020Forms'><button>GO TO FORMS</button></a>
        </div>
             
        {/* <button 
          onClick={this.handleSubmit}
          className='btn btn-primary'
          type='submit' 
          value='Submit'
        >
          Click here for forms
        </button> */}
                
      </div>
    )
  }
}

export default Forms;