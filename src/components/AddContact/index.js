import { Component } from "react"
import ContactBook from "../ContactBook";
import './styles.css'



export default class AddContact extends Component{
    constructor(props){
        super(props);
        this.state = {
                  id: props.new_id,
                  firstName: '',
                  lastName: '',
                  address: '',
                  avatar: '',
                  phoneNumber: '',
                  showMoreDetails: false
                }               
    }

    onChangeHandler = (e) => {
        console.log(e)
        let newState;
        if (e.target.id === 'avatar'){
            newState = {[e.target.id] : e.target.files[0]}
        } else {
            newState = { [e.target.id]: e.target.value }
        }
        this.setState(newState)
    }

    SubmitNewContact = (e) => {
        e.preventDefault()
        console.log(this.state);
        this.props.addingNewContact(this.state);
    }

    render(){
        
        return(
            <form onSubmit={this.SubmitNewContact} className = 'new-contact-form'>
            <label htmlFor='firstName'>First Name:</label>
            <input onChange={this.onChangeHandler} value={this.state.firstName} type='text' id='firstName'/>

            <label htmlFor='lastName'>Last Name:</label>
            <input onChange={this.onChangeHandler} value={this.state.lastName} type='text' id='lastName'/>

            <label htmlFor='address'>Address:</label>
            <input onChange={this.onChangeHandler} value={this.state.address} type='text' id='address'/>

            <label htmlFor='phonenumber'>Phone Number:</label>
            <input onChange={this.onChangeHandler} value={this.state.phoneNumber} type='text' id='phoneNumber'/>

            <label htmlFor='avatarUpload'>Avatar</label>
            <input onChange={this.onChangeHandler} value={this.state.avatar} type='file' id='avatar' accept="image/png"/>

            <button style={{width:'100px'}} >Save</button>

            {/* <img src={this.state.image} alt='avatar' />
            <p>Upload file</p>
            <input type='file' name='file' onChange={this.changeHandler} />
            <button type='submit'>SUBMIT</button> */}
            </form>
        )       
    }
}