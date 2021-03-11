import axios from 'axios';
import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import AuthenticationService, { USER_NAME_SESSION_ATTRIBUTE_NAME } from './AuthenticationService.js'

class AuthenticatedRoute extends Component {

    render() {
        if (AuthenticationService.isUserLoggedIn()) {
            return <Route {...this.props} />
        } else {
            return <Redirect to="/login" />
        }

    }
}

export default AuthenticatedRoute