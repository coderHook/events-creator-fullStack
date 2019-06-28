import React, { Component } from 'react'
import './css/EventDetail.css'

export default class EventDetails extends Component {
  render() {
    return (
      <div className="card">
        <h1>{this.props.event.name}</h1>
        <p>
        <i>Date: {this.props.event.date}</i>
        </p>
        <p className="cardcontent">{this.props.event.description}</p>

        <div className="buttonsDiv">
          <div className="button_cont" align="center" onClick={() => this.props.onClick()}>
          <span className="button_delete">Delete Event</span>
          </div>

          <div className="button_cont" align="center" 
              onClick={() =>this.props.editMode()}>
            <span className="button_edit">Edit Event</span>
          </div>
        </div>
        
      </div>
    )
  }
}
