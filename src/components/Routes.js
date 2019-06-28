import React, { Component } from 'react'
import EventListContainer from './EventListContainer'
import EventDetailsComponent from './EventDetailsComponent'
import LoginFormContainer from './Login/LoginFormContainer'
import {Switch, Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'

class Routes extends Component {
  render() {
    return (
      <div>
        {!this.props.authenticated && 
          <Switch>
          <Route path="/login" 
            component= {LoginFormContainer} 
          />
          <Route path="" 
            render={() => <Redirect to="/login" />} 
          />
          </Switch>
        }

        {this.props.authenticated && 
          <Switch>
            <Route path="/" exact component={EventListContainer} />
            <Route path="/events/:id" component={EventDetailsComponent} />
            <Route path="" render={() => <Redirect to="/" />} />
        </Switch>
        }

      </div>
    )
  }
}

const mapStateToProps = state => ({
  authenticated: !!state.currentUser
})

export default withRouter(connect(mapStateToProps)(Routes))