// import React from 'react';

// class SignUpLogInForm extends React.Component {
//   emailInput = React.createRef()
//   passwordInput = React.createRef()

//   redirect = (userId) => {
//     this.props.history.push(`/${userId}/boards`)
//   }

//   render() {
//     return (
//       <AuthConsumer>
//         {({signUp, logIn, user, authMessage}) => (
//           <React.Fragment>
//             {!user.id ? (
//               <div className='sign-up-wrapper'>
//                 <h2>Sign In or Create Account</h2>
//                 {authMessage ? <span>{authMessage}</span> : ''}
//                 <form className='sign-up-form'>
//                   <div>
//                     <input
//                       ref={this.emailInput}
//                       type='email'
//                       name='email'
//                       placeholder='Email'
//                     />
//                   </div>
//                   <div>
//                     <input
//                       ref={this.passwordInput}
//                       type='password'
//                       name='password'
//                       placeholder='Password'
//                     />
//                   </div>
//                   <div>
//                     <button 
//                       onClick={(e) => logIn(
//                         this.emailInput.current.value,
//                         this.passwordInput.current.value,
//                         e
//                       )}
//                     >
//                       Login
//                     </button>
//                     <button 
//                       onClick={(e) => signUp(
//                         this.emailInput.current.value,
//                         this.passwordInput.current.value,
//                         e
//                       )}
//                     >
//                       Sign Up
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             ) : (
//               <button onClick={() => this.redirect(user.id)}>Go to My Boards</button>
//             )}
//           </React.Fragment>
//         )}
//       </AuthConsumer>
//     )
//   }
// }

// export default SignUpLogInForm;