import {EVENT_FETCHED} from '../actions/events'

const reducer = (state = null, action = {}) => {
  switch(action.type) {
    case EVENT_FETCHED:
      return action.event
    
    default:
      return state;
  }
}

export default reducer