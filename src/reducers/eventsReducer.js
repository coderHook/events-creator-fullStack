import {EVENTS_FETCHED, EVENT_CREATE_SUCCESS, EVENT_DELETE_SUCCESS, EVENT_EDIT_SUCCESS} from '../actions/events'

const reducer = (state = null, action = {}) => {
  switch(action.type) {
    case EVENTS_FETCHED:
      return action.events
    case EVENT_CREATE_SUCCESS:
      return [
        ...state,
        action.event
      ]
    case EVENT_DELETE_SUCCESS:
      return state.filter(ev => ev.id !== action.id)
    
    case EVENT_EDIT_SUCCESS:
        return state.map(ev => ev.id === action.event.id
          ? action.event
          : ev
        )
        
    default:
      return state
  }
}

export default reducer