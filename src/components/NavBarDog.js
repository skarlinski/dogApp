import React from 'react';
import {Form, FormControl, Nav, Navbar} from 'react-bootstrap';

class NavBarDog extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Dog Book</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#/breeds">Breeds</Nav.Link>
                <Nav.Link href="#/about">About</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>

        );
    }

}

export default NavBarDog;