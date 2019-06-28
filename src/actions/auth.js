import request from 'superagent'

export const LOGGED_USER = 'LOGGED_USER'

const baseUrl = 'http://localhost:4000'


export const userLogin = (token) => ({
  type: LOGGED_USER,
  token
})

export const login = (email, password) => (dispatch) => {
  request
    .post(`${baseUrl}/logins`)
    .send({email, password})
    .then(response => {
      console.log('response', response.body)
      dispatch(userLogin(response.body))
    })
    .catch(console.error )
}