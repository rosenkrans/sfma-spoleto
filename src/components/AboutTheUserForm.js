import React from 'react';
import { aboutusersRef } from '../firebase';
import PersonInfoForm from './PersonInfoForm';

class AboutTheUserForm extends React.Component {
  constructor(props){
    super(props);
    this.handleInputChange=this.handleInputChange.bind(this)
  }
  state = {
    userId: '',
    createdAt: new Date(),
    name: '',
    email: '',
    phone: '',
    section: '',
    stipend: ''
  }

  handleInputChange(index, personType, e){ 
    console.log(e.target)
    this.setState({
      [e.target.name]: e.target.value
      
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log(this.props.match.params.userId)
    await aboutusersRef.add({ aboutUser:{...this.state, userId: this.props.match.params.userId} })
    console.log('State', this.state)
    this.props.history.push({
      pathname: `/${this.props.match.params.userId}/abouttrip`
    })
  }

  render() {
    return (
      <div className="about-user-form-wrapper">
        <div>
          <h1>First, tell us about you</h1>
        </div>

        <PersonInfoForm formData={this.state} handleInputChange={this.handleInputChange} />
          
        <button 
          onClick={this.handleSubmit}
          className='btn btn-primary'
          type='submit' 
          value='Submit'
        > 
          NEXT
        </button>
      
      </div>
    )
  }
}
export default AboutTheUserForm;