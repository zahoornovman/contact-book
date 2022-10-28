import ViewAndEditContact from '../ViewAndEditContact';
import DownArrow from '../Svg/down-arrow.svg'
import UpArrow from '../Svg/up-arrow.svg'
import './styles.css'

export default function Contact(props){
    
    function showMoreInfo (e) {
        props.toggleShowMoreDetails(props.contact.id); 
    
    }


    return ( 
        <div className='contact'>
            <div className='contact_card'>
                <div className='name'>
                    <img src={props.contact.avatar} style = {{height:60, width: 60}} alt='Svg Image' />
                    {props.contact.firstName + ' '}
                    {props.contact.lastName}
                </div>
                <div>
                    {console.log(props)}
                    <img onClick={showMoreInfo}
                    src={props.contact.showMoreDetails === false ? DownArrow : UpArrow} 
                    style = {{height:40, width: 20}}
                    alt= 'Contact Display'
                    role='button'
                    />
                </div>
            </div>
            <div>
            {props.contact.showMoreDetails && <ViewAndEditContact contact = {props.contact} updateExistingContact={props.updateExistingContact}/>} 
            </div>                                  
        </div>
    )
}

