import React, { Component } from 'react'
import LoginForm from './LoginForm'
import { connect } from 'react-redux'
import { login } from '../../actions/auth'

class LoginFormContainer extends Component {
  state = { 
    email: '',
    password: ''
  }

  onSubmit = (event) => {
    console.log('amI submitting=???')
    event.preventDefault()
    this.props.login(this.state.email, this.state.password)
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value.trim()
    })
  }

  render() {
    return (
      <div>
        <LoginForm 
          onSubmit={this.onSubmit}
          onChange = {this.onChange}
          values = {this.state}
        />

      </div>
    )
  }
}

export default connect(null, { login })(LoginFormContainer)