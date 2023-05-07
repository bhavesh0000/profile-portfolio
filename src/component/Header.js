import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const Header = ()=>{
    let activeStyle = {
        color:'#201b1a',
    }
    return<div className='header'>
        <Navbar expand="lg" fixed='top' className='navbar-box'>
            <Container>
                <Navbar.Brand>Bhavesh Gupta</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className='justify-content-end'>
                    <Nav className='ml-auto'>
                        <NavLink
                         to="/" className="nav-link" 
                         style={({isActive}) => (isActive ? activeStyle : undefined)}
                         >
                            Home
                            </NavLink>
                        <NavLink 
                        to="/About" className="nav-link" 
                        style={({isActive}) => (isActive ? activeStyle : undefined)}
                        >
                            About
                            </NavLink>
                        <NavLink
                         to="/projects" className="nav-link"
                         style={({isActive}) => (isActive ? activeStyle : undefined)}
                         >
                            Projects
                            </NavLink>
                        <NavLink 
                        to="/Skills"className="nav-link"
                        style={({isActive}) => (isActive ? activeStyle : undefined)}
                        >
                            Skills
                            </NavLink>
                        <NavLink 
                        to="/por"  className="nav-link"
                        style={({isActive}) => (isActive ? activeStyle : undefined)}
                        >
                            Positions
                            </NavLink>
                        <NavLink 
                        to="/Contact" className="nav-link"
                        style={({isActive}) => (isActive ? activeStyle : undefined)}
                        >
                            Contact
                            </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
}

export default Header