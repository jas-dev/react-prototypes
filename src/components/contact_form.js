import React, {Component} from 'react';
import Field from './field';

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
             <Field name='firstName' label='First Name' type='text' value={firstName} onChange={this.handleInputChange}/>
             <button>Add Contact</button>
          </form>
        );
    }
}

export default ContactForm;