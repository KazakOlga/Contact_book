import React from "react";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import InstagramIcon from '@material-ui/icons/Instagram';
import { useSelector } from 'react-redux';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import './Contact.css'
import { useParams } from "react-router";

function Contact() {
  const { contactId } = useParams()
  const contact = useSelector((state) => state.contacts[contactId] || {})
  console.log(contact)


    return (
      <div className="list_item">
          <PersonOutlineIcon className="contact_name" fontSize="large"/>
           <h4> {contact.name} {contact.surname}</h4>
           <div className="icon_pos">
           <PhoneIcon/><p> <a href="tel:{contact.phone}">{contact.phone}</a></p>
           </div>
           <div className="icon_pos">
           <PhoneIcon/><p><a href="tel:{contact.phone2}">{contact.phone2}</a></p>
           </div>
           <div className="icon_pos">
           <MailOutlineIcon/><p><a href="mailto:{contact.email}">{contact.email}</a></p>
           </div>
           <div className="icon_pos">
           <InstagramIcon/><p>{contact.instagram}</p>
           </div>
      </div>
    );
  }
  
  export default Contact;