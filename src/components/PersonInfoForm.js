import React from 'react';

class PersonInfoForm extends React.Component {

  render() {
    console.log(`Person ${this.props.index}: Stipend: ${this.props.formData.stipend}`)
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
              value={this.props.formData.name}
              placeholder='First and Last Name'
              onChange={(e) => this.props.handleInputChange(this.props.personType, this.props.index, e)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input
              className='form-control'
              id='email'
              type='email'
              name='email'
              value={this.props.formData.email}
              placeholder='Email'
              onChange={(e) => this.props.handleInputChange(this.props.personType, this.props.index, e)}
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
              value={this.props.formData.phone}
              placeholder='Phone Number'
              onChange={(e) => this.props.handleInputChange(this.props.personType, this.props.index, e)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='section'>Instrument Section</label>
            <input
              className='form-control'
              id='section'
              type='text'
              name='section'
              value={this.props.formData.section}
              placeholder='Instrument Section'
              onChange={(e) => this.props.handleInputChange(this.props.personType, this.props.index, e)}
            />
          </div>

          <div>
            <div>
              <label>
                <input
                  type="radio"
                  name="stipend"
                  value="yes"
                  checked={this.props.formData.stipend === "yes"}
                  onChange={(e) => this.props.handleInputChange(this.props.personType, this.props.index, e)}
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
                  checked={this.props.formData.stipend === "no"}
                  onChange={(e) => this.props.handleInputChange(this.props.personType, this.props.index, e)}
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