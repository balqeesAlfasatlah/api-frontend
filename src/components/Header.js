import React, { Component } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

class Header extends Component {


    render() {

        const { isAuthenticated } = this.props.auth0;
        return (
            <div>

                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Juice Shop</Navbar.Brand>
                        <Nav className="me-auto">
                            <Link to="/">Home</Link>
                            <Link to="/Favourite">Favourite List</Link>
                            {isAuthenticated ? <LogoutButton /> : <LoginButton />}
                            
                        </Nav>

                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default withAuth0(Header)
