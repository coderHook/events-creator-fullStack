import React, { Component } from 'react'
import './css/EventForm.css'

export default class EventForm extends Component {
  render() {
    return (
      <div className="form-style-6">
          <h1>{ this.props.editMode ? 'Edit' : 'Create'} Your Event</h1>

          <form onSubmit={(event) => this.props.onSubmit(event)}>
            <input type="text" name="name" placeholder="Name of the Event" 
                value={this.props.values.name } 
                onChange = {(event) => this.props.onChange(event)}
              />

            <input type="date" name="date" placeholder="Date" 
              value={this.props.values.date } 
              onChange = {(event) => this.props.onChange(event)}
            />

            <textarea name="description" placeholder="Describe your Event"       value={this.props.values.description } 
              onChange = {(event) => this.props.onChange(event)}>  
            </textarea>

            <input type="submit" value={ this.props.editMode ? 'Edit Event' : 'Add Event'} />

          </form>
      </div>
    )
  }
}
