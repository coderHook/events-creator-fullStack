import { combineReducers } from 'redux'
import events from './eventsReducer'
import event from './eventReducer'
import currentUser from './currentUser'

export default combineReducers({
  events,
  event,
  currentUser
})

