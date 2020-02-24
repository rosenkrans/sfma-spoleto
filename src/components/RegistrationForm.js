// import React from 'react';
// import { registrationsRef } from '../firebase';
// import PersonInfoForm from './PersonInfoForm';

// class RegistrationForm extends React.Component {
//   state = {
//     userId: '',
//     createdAt: new Date(),
//     name: '',
//     email: '',
//     phone: '',
//     section: '',
//     stipend: ''
//   }

//   handleInputChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value
//     })
//   }

//   handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(this.props.match.params.userId)
//     const newRegistration = await registrationsRef.add({ registration:{...this.state, userId: this.props.match.params.userId} })
//   }

//   render() {
//     return (
//       <div className="registration-form-wrapper">
//         <div>
//           <h1>Registration Form</h1>
//         </div>

//         <PersonInfoForm handleInputChange={this.handleInputChange}/>
          
//           <button 
//             className='btn btn-primary'
//             type='submit' 
//             value='Submit'
//           >
//             Submit
//           </button>
             
//       </div>
//     )
//   }

// }

// export default RegistrationForm;