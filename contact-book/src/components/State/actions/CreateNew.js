export const CREATE_NEW_CONTACT = 'CONTACTS::CREATE_NEW_CONTACT'
export const REMOVE_CONTACT = 'CONTACTS::REMOVE_CONTACT'


export const createNewContact = (contactId,name,surname,email,phone,phone2,instagram) => ({
    type: CREATE_NEW_CONTACT,
    payload: {
        id:contactId,
        name,
        surname,
        email,
        phone,
        phone2,
        instagram
        
    },
})

export const removeContact = (contactId)=>({
    type: REMOVE_CONTACT,
    payload:{
        contactId,
    }
})
