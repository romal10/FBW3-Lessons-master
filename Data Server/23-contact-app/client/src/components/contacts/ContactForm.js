import React , { useState ,useContext } from 'react'
import ContactContext from '../../context/contact/contactContext';


const ContactForm = () => {
    const contactContext  = useContext(ContactContext)
    const [contact , setContact] = useState({
        name:'',
        email:'',
        phone:'',
        type:'personal'
    });
    const { name , email , phone ,type } = contact;

    // the 3 dots means copy the whole contact Object and get the new state of  e.target.name from the input value
    const onchange = e => {
       setContact({ ...contact , [e.target.name]:e.target.value })
    }

    const onsubmit= e => {
        e.preventDefault();
        contactContext.addContact(contact);
        setContact({
        name:'',
        email:'',
        phone:'',
        type:'personal'

        })
    }

    return (
      <>
        <form onSubmit ={onsubmit}>  

            <h2 className="text-dark">Add Contact</h2>
            <input type="text" placeholder="name" name="name" value={name}
            onChange={onchange}
             />

             <input type="email" placeholder="Email" name="email" value={email}
            onChange={onchange}
             />
             <input type="text" placeholder="Mobile Phone" name="phone" value={phone}
            onChange={onchange}
             />



             <h5>Contact Type </h5>



            <input type="radio" name ="type" value="personal" 
             checked={type === 'personal'} onChange={onchange} />{' '} Personal

            <input type="radio" name ="type" value="business" 
              checked={type === 'business'} onChange={onchange}/>{' '}Business

            <div>
                <input type="submit"  value= 'Add Contact'
                  className = "btn btn-primary btn-block"/>
            </div>
        </form>

          <div>
            <button className="btn btn-dark btn-block" >
              Clear
            </button>
          </div>
          </>
    )
}

export default ContactForm
