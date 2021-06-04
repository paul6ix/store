import React from 'react';
import {Navbar, Container, Nav,} from "react-bootstrap";

function Header() {
    return (

        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <Navbar.Brand href="/">LEAP Store</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Login</Nav.Link>
                            <Nav.Link href="#link">Cart</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>

    );
}

export default Header;