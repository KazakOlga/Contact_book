import { combineReducers, createStore } from 'redux'
import contactReducer from './reducers/CreateNew'

const rootReducer = combineReducers({
    contacts: contactReducer
})

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)