import React from 'react'
import {connect} from 'react-redux'
import EventDetails from './EventDetails'
import {loadEvent, updateEvent, deleteEvent} from '../actions/events'

class EventDetailsContainer extends React.Component {

  onDelete = () => {
    this.props.deleteEvent(Number(this.props.match.params.id))
    this.props.history.push('/')
  }

  componentDidMount() {
    console.log('params', this.props.match.params.id)
    this.props.loadEvent(Number(this.props.match.params.id))
  }

  render() {
    if(!this.props.event) return "Loading..."
    return <EventDetails event={this.props.event} onClick={this.onDelete}/>
  }
}

const mapStateToProps = state => ({
  events: state.events,
  event: state.event
})

export default connect(mapStateToProps, {loadEvent, deleteEvent})(EventDetailsContainer)
