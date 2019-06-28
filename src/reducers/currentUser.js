import {LOGGED_USER} from '../actions/auth'

const reducer = (state = null, action= {}) => {
  switch(action.type){
    case LOGGED_USER:
      return action.token
    default:
      return state
  }
}

export default reducer