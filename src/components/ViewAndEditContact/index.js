import { Component } from 'react';
import './styles.css'

export default class ViewAndEditContact extends Component{
    constructor(props){
        super(props);
        this.state = {
            id: this.props.contact.id,
            firstName: this.props.contact.firstName,
            lastName: this.props.contact.lastName,
            address: this.props.contact.address,
            avatar: '',
            phoneNumber: this.props.contact.phoneNumber,
            showMoreDetails: this.props.contact.showMoreDetails
          }
    }

    onEditHandler = (e) => {
        console.log(e)
        let newState;
        if (e.target.id === 'avatar'){
            newState = {[e.target.id] : e.target.files[0]}
        } else {
            newState = { [e.target.id]: e.target.value }
        }
        this.setState(newState)
    }

    updateContact = (e) =>{
        e.preventDefault();
        this.props.updateExistingContact(this.state);
    }

    render(){
        return(

            <div>
                    <form onSubmit={this.updateContact} className = 'view-edit-contact-form'>
                    <label htmlFor='firstName'>First Name:</label>
                    <input onChange={this.onEditHandler} value={this.state.firstName} type='text' id='firstName'/>

                    <label htmlFor='lastName'>Last Name:</label>
                    <input onChange={this.onEditHandler} value={this.state.lastName} type='text' id='lastName'/>

                    <label htmlFor='address'>Address:</label>
                    <input onChange={this.onEditHandler} value={this.state.address} type='text' id='address'/>

                    <label htmlFor='phonenumber'>Phone Number:</label>
                    <input onChange={this.onEditHandler} value={this.state.phoneNumber} type='text' id='phoneNumber'/>

                    <label htmlFor='avatarUpload'>Avatar</label>
                    <input onChange={this.onEditHandler} value='' type='file' id='avatar' accept="image/png"/>

                    <button style={{width:'100px'}} >Edit</button>

                    <button style={{width:'100px'}} >Delete</button>

                    </form>

            </div>
        )
    }
}