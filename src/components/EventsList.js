import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CreateEventFormContainer from './CreateEventFormContainer'
import './css/EventsList.css'

export default class EventsList extends Component {
  render() {
    console.log('what is in events', this.props.events)
   
    return (
      <div>
        <CreateEventFormContainer />

        <ul>
          {
            this.props.events.map(event => 
              <li key={event.id}>
                <Link to={`/events/${event.id}`}>{event.name}</Link>
              </li> )
          }
        </ul>
        
      </div>
    )
  }
}
