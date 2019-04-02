import React, {Component} from 'react';
import ContactList from './contact_list';
import ContactForm from './contact_form';
import contactData from '../data/contacts';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            contacts: contactData
        }
        /*this.addContact=this.addContact.bind(this)*/
    }
    render(){
        return (
            <div className='container'>
                <h1 className='text-center'>Address Book</h1>
                <div className='row'>
                    <div className='col-4'>
                        <ContactForm add={this.addContact}/>
                    </div>
                    <ContactList contacts={this.state.contacts}/>

                </div>
            </div>
        )
    }
    addContact = contact =>{
        console.log('app: add Component:',contact);

        this.setState({
            contacts: [contact, ...this.state.contacts]
        });
    }


}

export default App;