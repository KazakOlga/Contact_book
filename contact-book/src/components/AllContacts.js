import {  useSelector } from 'react-redux';
import React from "react";
import { useHistory} from 'react-router';
import ListItem from '@material-ui/core/ListItem'
import List from '@material-ui/core/List'

function AllContacts() {
  const contacts = useSelector((state) => state.contacts)
  const history = useHistory()


  

  const handleContactLinkClick = (contact) => {
    history.push(`/contacts/${contact.id}`)
}
    
    return (
      <div>
              <List className="chats__sidebar"> {/* ADD filter by alphabуt */}
              {Object.values(contacts).map((contact) => (
                   <div className="chats__sidebar__item" key={contact.id}>
                   <ListItem
                       button
                       component="a"
                       onClick={()=>handleContactLinkClick(contact)}
                   >
                       {contact.name} {contact.surname} {/*ADD deleting contact and adding to favorite */}
                   </ListItem></div>
            ))}
            
            </List>
      </div>
    );
  }
  
  export default AllContacts;