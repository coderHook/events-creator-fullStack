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

const eventDelete = event => ({
  type: EVENT_DELETE_SUCCESS,
  id: event
})

export const loadEvents = () => (dispatch, getState) => {
  // when the state already contains events, we don't fetch them again
  if (getState().events) return

  // a GET /events request
  request(`${baseUrl}/events`)
    .then(response => {
      // dispatch an EVENTS_FETCHED action that contains the events
      dispatch(eventsFetched(response.body))
    })
    .catch(console.error)
}


export const createEvent = (data) => dispatch => {
  request
    .post(`${baseUrl}/events`)
    .send(data)
    .then(response => {
      dispatch(eventCreateSuccess(response.body))
    })
    .catch(console.error)
}

export const loadEvent = (id) => (dispatch) => {
  // a GET /events request
  request(`${baseUrl}/events/${id}`)
    .then(response => {
      // dispatch an EVENT_FETCHED action that contains the events
      console.log('eventDispatch', response.body)
      dispatch(eventFetched(response.body))
    })
    .catch(console.error)
}

export const deleteEvent = (id) => (dispatch) => {
  request
    .delete(`${baseUrl}/events/${id}`)
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

export const updateEvent = (id, editedEvent) => (dispatch) => {
  request
    .patch(`${baseUrl}/events/${id}`)
    .send(editedEvent)
    .then(response => dispatch(editEvent(response.body)))
    .catch(console.error )
}