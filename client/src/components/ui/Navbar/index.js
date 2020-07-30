import React, { Component } from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import './index.css'

import AuthService from './../../../service/AuthService'

import { Link, NavLink } from 'react-router-dom'

class Navigation extends Component {

    constructor(props) {
        super(props)
        this.AuthService = new AuthService()
    }

    logout = () => {
        this.AuthService
            .logout()
            .then(() => {
                this.props.setTheUser(false)
                this.props.handleToast(true, 'Usuario desconectado')
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Navbar className="navbar" expand="lg" sticky="top" >
                <div className="logoHeader">
                    <img src='https://images.squarespace-cdn.com/content/v1/58dace4846c3c499690aded0/1490737428992-XSVQIKLFHPJB4W8K3T2S/ke17ZwdGBToddI8pDm48kL3VKmwKI3leYB51VJjLFB8UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcQ643Xlia2-fGNGmT0Ni4GzSBWYegu4Na6KP29i9RHf4IJOBaNFWew0RIOS0ELFXu/vinyl-record-1-1024-768-descibel-radio-1TJlqv-clipart.png?format=1500w' alt="logo" className="logo"></img>
                </div>
                <Navbar.Brand>
                    <Link to="/" className="indie">Indie.</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as="span">
                            <NavLink to="/" exact activeStyle={{ color: 'white' }}>Home</NavLink>
                        </Nav.Link>
                        <Nav.Link as="span">
                            <NavLink to="/artists" activeStyle={{ color: 'white' }}>Artists</NavLink>
                        </Nav.Link>

                        {this.props.loggedInUser ?
                            (
                                <Nav.Link as="span">
                                    <span onClick={this.logout}>Log Out</span>
                                </Nav.Link>
                            ) : (
                                <>
                                    <Nav.Link as="span">
                                        <NavLink to="/signup" activeStyle={{ color: 'white' }}>Register</NavLink>
                                    </Nav.Link>
                                    <Nav.Link as="span">
                                        <NavLink to="/login" activeStyle={{ color: 'white' }}>Log In</NavLink>
                                    </Nav.Link>
                                </>
                            )
                        }

                        <Nav.Link as="span">
                            <NavLink to="/profile" activeStyle={{ color: 'white' }}>Hello, {this.props.loggedInUser ? this.props.loggedInUser.username : 'guest'}</NavLink>
                        </Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation