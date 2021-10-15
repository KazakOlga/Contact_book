import { CREATE_NEW_CONTACT } from "../actions/CreateNew";
import { REMOVE_CONTACT } from "../actions/CreateNew";

const initialState={
    // contact1:{
    //     id:'contact1',
    //     name:'Olga',
    //     surname:'Kazak',
    //     email:'ast@mail.ru',
    //     phone:'780256',
    //     phone2:'665588',
    //     instagram:'Kazak__Olga',
    //     fav:false
    //         }
}

export default function contactReducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_NEW_CONTACT: {
            return {
                ...state,
                [action.payload.id]:action.payload
               
                
              
            }
        } 
        case REMOVE_CONTACT: {
            delete state[action.payload.contactId]

            return{
                ...state 
            } 
        }
    
        default:
        return state
}
}