import React from 'react'
import {connect} from 'react-redux'
import EventDetails from './EventDetails'
import {loadEvent, updateEvent, deleteEvent} from '../actions/events'
import EventForm from './EventForm'

class EventDetailsContainer extends React.Component {
  state = {
    editMode: false,
    event: this.props.event
}

  onDelete = () => {
    this.props.deleteEvent(Number(this.props.match.params.id))
    this.props.history.push('/')
  }

  onEdit = () => {
    this.setState({
      editMode: true,
      formValues: {
        name: this.props.event.name,
        date: this.props.event.date,
        description: this.props.event.description
      }
    })
  }

  onChange = (event) => {
    console.log('handling changes', event)
    this.setState({
      formValues: {
        ...this.state.formValues,
        [event.target.name]: event.target.value
      }
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    console.log('Submitting"')

    this.setState({
      editMode: false,
    })

    this.props.updateEvent(this.props.event.id, this.state.formValues)
    this.props.history.push('/')


  }

  componentDidMount() {
    console.log('params', this.props.match.params.id)
    this.props.loadEvent(Number(this.props.match.params.id))
  }

  render() {
    if(!this.props.event) return "Loading..."
    return (
      <div>
        <EventDetails 
        event={ (this.state.formValues) ? this.state.formValues : this.props.event} 
        onClick={this.onDelete}
        editMode={this.onEdit} 
        />

      { (this.state.editMode) && <EventForm values={this.state.formValues} editMode={this.state.editMode} onChange={this.onChange} onSubmit={this.onSubmit} />}

      </div>
    )
      
  }
}

const mapStateToProps = state => ({
  events: state.events,
  event: state.event
})

export default connect(mapStateToProps, {loadEvent, updateEvent, deleteEvent})(EventDetailsContainer)
