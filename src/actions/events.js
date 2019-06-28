import request from 'superagent'

export const EVENTS_FETCHED = 'EVENTS_FETCHED'
export const EVENT_FETCHED = 'EVENT_FETCHED'
export const EVENT_CREATE_SUCCESS = 'EVENT_CREATE_SUCCESS'
export const EVENT_DELETE_SUCCESS = 'EVENT_DELETE_SUCCESS'
export const EVENT_EDIT_SUCCESS = 'EVENT_EDIT_SUCCESS'

const baseUrl = 'http://localhost:4000'

const eventsFetched = events => ({
  type: EVENTS_FETCHED,
  events
})

const eventCreateSuccess = event => ({
  type: EVENT_CREATE_SUCCESS,
  event
})

const eventFetched = event => ({
  type: EVENT_FETCHED,
  event
})



export const loadEvents = () => (dispatch, getState) => {
  // when the state already contains events, we don't fetch them again
  if (getState().events) return
  const jwt = getState().currentUser.jwt

  // a GET /events request
  request(`${baseUrl}/events`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(response => {
      // dispatch an EVENTS_FETCHED action that contains the events
      dispatch(eventsFetched(response.body))
    })
    .catch(console.error)
}


export const createEvent = (data) => (dispatch, getState) => {
  if(getState().event) return
  const jwt = getState().currentUser.jwt

  request
    .post(`${baseUrl}/events`)
    .set('Authorization', `Bearer ${jwt}`)
    .send(data)
    .then(response => {
      dispatch(eventCreateSuccess(response.body))
    })
    .catch(console.error)
}

export const loadEvent = (id) => (dispatch, getState) => {
  if (getState().event) return
  const jwt = getState().currentUser.jwt

  // a GET /events request
  request(`${baseUrl}/events/${id}`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(response => {
      // dispatch an EVENT_FETCHED action that contains the events
      console.log('eventDispatch', response.body)
      dispatch(eventFetched(response.body))
    })
    .catch(console.error)
}

const eventDelete = event => ({
  type: EVENT_DELETE_SUCCESS,
  id: event
})

export const deleteEvent = (id) => (dispatch, getState) => {
  const jwt = getState().currentUser.jwt

  request
    .delete(`${baseUrl}/events/${id}`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(response => {
      console.log('deleteEvent', response)
      dispatch(eventDelete(id))
    })
    .catch(console.error)
}

const editEvent = event => ({
  type: EVENT_EDIT_SUCCESS,
  event
})

export const updateEvent = (id, editedEvent) => (dispatch, getState) => {
  const jwt = getState().currentUser.jwt

  request
    .patch(`${baseUrl}/events/${id}`)
    .set('Authorization', `Bearer ${jwt}`)
    .send(editedEvent)
    .then(response => dispatch(editEvent(response.body)))
    .catch(console.error )
}



