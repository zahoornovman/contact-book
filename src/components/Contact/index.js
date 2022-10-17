import DownArrow from '../Svg/down-arrow.svg'
import UpArrow from '../Svg/up-arrow.svg'
import './styles.css'

export default function Contact(props){
    
    function showMoreInfo (e) {
        props.toggleShowMoreDetails(props.contact.id); 
    
    }

    const x = 
    <div>
            <form onSubmit={props.SubmitNewContact} className = 'contact-form'>
            <label htmlFor='firstName'>First Name:</label>
            <input  value={props.contact.firstName} type='text' id='firstName'/>

            <label htmlFor='lastName'>Last Name:</label>
            <input value={props.contact.lastName} type='text' id='lastName'/>

            <label htmlFor='address'>Address:</label>
            <input value={props.contact.address} type='text' id='address'/>

            <label htmlFor='phonenumber'>Phone Number:</label>
            <input value={props.contact.phoneNumber} type='text' id='phoneNumber'/>

            <label htmlFor='avatarUpload'>Avatar</label>
            <input value='' name = 'choor avatar' type='file' id='avatar' accept="image/png"/>

            <button style={{width:'100px'}} >Edit</button>

            <button style={{width:'100px'}} >Delete</button>

            </form>

    </div>

    return ( 
        <div className='contact'>
            <div className='contact_card'>
                <div className='name'>
                    <img src={props.contact.avatar} style = {{height:60, width: 60}} />
                    {props.contact.firstName + ' '}
                    {props.contact.lastName}
                </div>
                <div>
                    {console.log(props)}
                    <img onClick={showMoreInfo}
                    src={props.contact.showMoreDetails === false ? DownArrow : UpArrow} 
                    style = {{height:40, width: 20}}
                    alt= 'Contact Display'
                    />
                </div>
            </div>
            <div>
            {props.contact.showMoreDetails && x} 
            </div>                                  
        </div>
    )
}

