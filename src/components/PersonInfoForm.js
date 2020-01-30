import React from 'react';

class PersonInfoForm extends React.Component {

  render() {
    return (
      <div className="person-info-form-wrapper">

        <form className="form">
          <div className='form-group'>
            <label htmlFor='name'>First and Last Name</label>
            <input
              className='form-control'
              id='name'
              type='text'
              name='name'
              value={this.props.person.name}
              placeholder='First and Last Name'
              onChange={(e) => this.props.handleInputChange(this.props.index, e)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input
              className='form-control'
              id='email'
              type='email'
              name='email'
              placeholder='Email'
              onChange={(e) => this.props.handleInputChange(this.props.index, e)}
            />
          </div>
          
          <div className='form-group'>
            <label htmlFor='phone'>Phone Number</label>
            <input
              className='form-control'
              id='phone'
              type='tel'
              name='phone'
              pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
              placeholder='Phone Number'
              onChange={(e) => this.props.handleInputChange(this.props.index, e)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='section'>Instrument Section</label>
            <input
              className='form-control'
              id='section'
              type='text'
              name='section'
              placeholder='Instrument Section'
              onChange={(e) => this.props.handleInputChange(this.props.index, e)}
            />
          </div>

          <div>
            <div>
              <label>
                <input
                  type="radio"
                  name="stipend"
                  value="yes"
                  // checked={this.state.stipend === "yes"}
                  onChange={(e) => this.props.handleInputChange(this.props.index, e)}
                />
                Apply Stipend
              </label>
            </div>
​
            <div>
              <label>
                <input
                  type="radio"
                  name="stipend"
                  value="no"
                  // checked={this.state.stipend === "no"}
                  onChange={(e) => this.props.handleInputChange(this.props.index, e)}
                />
                No Stipend
              </label>
            </div>
          </div>
          
          
        </form>
        
      </div>
    )
  }

}

export default PersonInfoForm;