import React, {Component} from 'react';

class ContactForm extends Component{
    constructor (props){
        super(props);
        this.state = {
            form: {firstName: '', lastName: ''}
        };
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleInputChange(event){
        const {form} = this.state;
        const {value, name} = event.target;
        form[name] = value;
        this.setState({form: {...form}})
    }
    handleSubmit(event){
        event.preventDefault();
        console.log(this.state.form);
    }
    render(){
        const {firstName, lastName} = this.state.form;

        return (
          <form onSubmit={this.handleSubmit}>
              <div className='form-group'>
                <label>First Name</label>
                  <input onChange={this.handleInputChange} value={firstName} name='firstName' type='text' className='form-control'/>
              </div>
              <div className='form-group'>
                  <label >Last Name</label>
                  <input onChange={this.handleInputChange} value={lastName} name='lastName' type='text' className='form-control'/>
              </div>
              <button>Add Contact</button>
          </form>
        );
    }
}

export default ContactForm;