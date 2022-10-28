import React, { Component } from 'react'
import Contact from '../Contact';
import './styles.css'
import Logo from '../Svg/plus2.svg'
import AddContact from '../AddContact';
import Avatar from '../Svg/logo.svg'

export default class ContactBook extends Component{
    constructor(props){
        super(props);
        this.state = {
            contacts: [
                {
                  id: 0,
                  firstName: 'SIT',
                  lastName: 'Academy',
                  address: 'Zurich',
                  avatar: '../Svg/logo.svg',
                  phoneNumber: '+41123456789',
                  showMoreDetails: false
                },
                {
                  id: 1,
                  firstName: 'John',
                  lastName: 'Doe',
                  address: 'Bern',
                  avatar: Avatar,
                  phoneNumber: '+41987654321',
                  showMoreDetails: false
                }
              ],
            showAddNew: false,
        };
    }

    addingNewContact = (newContact) => {
      console.log('Printing the new Contact');
      console.log(newContact);
      this.toggleShowAddNew();
      this.setState({
        contacts: [...this.state.contacts, newContact]
      })

    }

      // need to write function to update existing contact
    updateExistingContact = (updatedContact) => {
      console.log('contact updated')
      
      console.log(updatedContact);
      
    }


    

    toggleShowAddNew = () => {
      if (this.state.showAddNew === true){
        this.setState({
          showAddNew: false
        })
      } else{
        this.setState({
          showAddNew: true
        })
      }      
      console.log(this.state.showAddNew)
    }

    toggleShowMoreDetails = (index) => {
      console.log(this.state.contacts)
      let contactCopy = [...this.state.contacts];
      console.log(contactCopy[index].showMoreDetails);
      if (contactCopy[index].showMoreDetails === true){
        contactCopy[index].showMoreDetails = false
      } else {
        contactCopy[index].showMoreDetails = true
      }
      console.log(contactCopy[index].showMoreDetails);
      this.setState({
        contacts: contactCopy
      })  
    }


    render(){
        return (
            <div className='contact-book'>
            <h1 >Contact Book</h1>
            <img onClick={this.toggleShowAddNew} 
              src={Logo} 
              style = {{height:50, width: 36}}
              id = 'plus-svg'
              alt= 'Add Contact'
              role='button'
              
            />
            {this.state.showAddNew && <AddContact addingNewContact={this.addingNewContact} new_id={this.state.contacts.length} className='new-contact'/>}
            
                       
            {                    
              this.state.contacts.map((contact,index) =>
                <Contact key={this.state.contacts.id} id={this.state.contacts.id} toggleShowMoreDetails= {this.toggleShowMoreDetails} updateExistingContact={this.updateExistingContact} contact={contact} classname = 'contact' />
              )
            }
            </div>
          )
    }
}

