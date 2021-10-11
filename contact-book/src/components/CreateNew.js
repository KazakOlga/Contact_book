import React from 'react';
import './CreateNew.css'
import { useHistory} from 'react-router';
import { createNewContact } from './State/actions/CreateNew';
import { useDispatch} from 'react-redux';
import Input from './Input';




function CreateNew() {
  const dispatch = useDispatch()
  const history=useHistory()
  
  const handleCreateNewContact= (name,surname,email,phone,phone2,instagram)=>{
    dispatch(createNewContact(`contact${Date.now()}`,name,surname,email,phone,phone2,instagram))
    history.push(`../contacts`)
  }
    return (
      <Input onSubmit={handleCreateNewContact}/>
     
    );
  }
  
  export default CreateNew;

 