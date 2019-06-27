import request from 'superagent'

export const EVENTS_FETCHED = 'EVENTS_FETCHED'
export const EVENT_CREATE_SUCCESS = 'EVENT_CREATE_SUCCESS'

const baseUrl = 'http://localhost:4000'

const eventsFetched = events => ({
  type: EVENTS_FETCHED,
  events
})

const eventCreateSuccess = event => ({
  type: EVENT_CREATE_SUCCESS,
  event
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
