import { useSelector } from 'react-redux';
import React from "react";
import { useHistory} from 'react-router';
import ListItem from '@material-ui/core/ListItem'
import List from '@material-ui/core/List'
import './AllContacts.css'

function AllContacts() {
  const contacts = useSelector((state) => state.contacts)
  const history = useHistory()


  const handleContactLinkClick = (contact) => {
    history.push(`/contacts/${contact.id}`)
}
    
    return (
      <div>
              <List className="chats__sidebar"> 
              {Object.values(contacts).map((contact) => (
                   <div className="chats__sidebar__item" key={contact.id}>
                   <ListItem
                      className="contact_flex"
                       button
                       component="a"
                       onClick={()=>handleContactLinkClick(contact)}
                   >
                       <p >{contact.name} {contact.surname}</p>
                   </ListItem>
                   
                   </div>
            ))}
            
            </List>
      </div>
    );
  }
  
  export default AllContacts;