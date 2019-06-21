import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

export class Nav extends Component {
    constructor(){
        super()

        this.state = {

        }
    }

    handleHomeClick = () => {
        this.props.history.push('/dashboard')
    }

    handleNewPostClick = () => {
        this.props.history.push('/new')
    }

    handleLogoutClick = () => {
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <button onClick={this.handleHomeClick}>Home</button>
                <button onClick={this.handleNewPostClick}>New Post</button>
                <button onClick={this.handleLogoutClick}>Logout</button>
            </div>
        )
    }
}

export default withRouter(Nav)
