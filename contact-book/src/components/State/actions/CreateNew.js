export const CREATE_NEW_CONTACT = 'CONTACTS::CREATE_NEW_CONTACT'

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