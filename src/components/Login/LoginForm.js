import React, { Component } from 'react'
import './LoginForm.css'

export default class LoginForm extends Component {
  render() {
    return (
      <div className="loginForm">
        
        <p>to test the app enter ===> email=admin@example.com password=secret</p>
        <br></br>

        <h1 align="center">Login</h1>
        <br></br>

        <div className="login">

          <input
            type="text"
            placeholder="Username" id="username"
            onChange={(event) => this.props.onChange(event)}
            value={this.props.values.name}
            name="email"
          />
          <input
            type="password"
            placeholder="Password"
            id="password"
            onChange={(e) => this.props.onChange(e)}
            value={this.props.values.password}
            name="password" />
          <button
            type="submit"
            value="Sign In"
            onClick={(e) => this.props.onSubmit(e)} 
          >
            Log in
          </button>
        </div>
      </div>
    )
  }
}
