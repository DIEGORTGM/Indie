import React, { Component } from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

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
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top" >
                <Navbar.Brand>
                    <Link to="/">Indie</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as="span">
                            <NavLink to="/" exact activeStyle={{ color: 'white' }}>Home</NavLink>
                        </Nav.Link>
                        <Nav.Link as="span">
                            <NavLink to="/coasters" activeStyle={{ color: 'white' }}>Artists</NavLink>
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