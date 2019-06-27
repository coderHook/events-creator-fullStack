import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createEvent } from '../actions/events'
import EventForm from './EventForm'

class CreateEventFormContainer extends Component {
  state = {
    name: '',
    date: '',
    description: ''
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()

    if(this.state.name !== '') {
      console.log('Am I here onSubmit?')
      this.props.createEvent(this.state)
      this.setState({
        name: '',
        date: '',
        description: ''
      })
    }

  }

  render() {
    return (
      <EventForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    )
  }
}

export default connect(null, {createEvent})(CreateEventFormContainer)