import React from 'react';
import {Form, FormControl, Nav, Navbar} from 'react-bootstrap';

class NavBarDog extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Dog Book</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#home">Breeds</Nav.Link>
                <Nav.Link href="#link">About</Nav.Link>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                {/* <Button variant="outline-success">Search</Button> */}
                </Form>
            </Navbar.Collapse>
            </Navbar>

        );
    }

}

export default NavBarDog;