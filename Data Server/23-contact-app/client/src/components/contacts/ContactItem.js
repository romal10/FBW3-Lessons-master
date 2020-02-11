import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../context/contact/contactContext';





const ContactItem = ({ contact }) => {

    
    const  { id , name , email, phone , type } = contact;
    const contactContext=useContext(ContactContext);
    


    //go to ispect element and then components then hooks then see the current : which is showing the clicked id includig email name and so on, the pb is after we delete the contact still the current there, what we have to do is using the clear current to remove it from the data base also and from the components.
    const setCurrent=contactContext.setCurrent;
    const deleteContact=contactContext.deleteContact;
    const clearCurrent=contactContext.clearCurrent;

    const onDelete=()=>{
        deleteContact(id)
        clearCurrent();
    }


    return (
        <div className = 'card bg-light'>
            <h3 className ="text-primary text-left">
                {name}{' '} <span style={{float:'right'}} className= {'badge '+ (type ==='personal' ? 'badge-success':'badge-primary')} >
                    {type.charAt(0).toUpperCase()+ type.slice(1)}
                </span>
            </h3>
            <ul className='list'>
                { 
                
                    <li>
                        <i className="far fa-envelope-open" /> {email}
                    </li>  

                }
                { 
                
                <li>
                    <i className="fas fa-mobile-alt" /> {phone}
                </li>  

            }

            </ul>
            <p>
                <button className="btn btn-dark btn-sm-radius" onClick={()=>setCurrent(contact)}>Edit </button>
                <button className="btn btn-danger btn-sm-radius" onClick={onDelete}>Delete </button>
            </p>
            
        </div>
    )
}
ContactItem.propTypes = {
    contact : PropTypes.object.isRequired
}
export default ContactItem;