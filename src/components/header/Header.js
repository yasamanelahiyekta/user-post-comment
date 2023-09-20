import React from 'react'
import { Button, Container, Form, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate()
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand as={ Link } to={ "/" }>Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={ { maxHeight: '100px' } }
                        navbarScroll
                    >
                        <Nav.Link as={ Link } to={ "/users" }>users</Nav.Link>
                        <Nav.Link as={ Link } to={ "contact" }>contact us</Nav.Link>
                        <Nav.Link as={ Link } to={ "profile" }>profile</Nav.Link>
                        <Nav.Link as={ Link } to={ "about" } >
                            about us
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        // <div style={ { display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center", textDecoration: "none", fontSize: "1.5rem" } }>
        //     <p onClick={ () => navigate("/") } >home</p>
        //     <p onClick={ () => navigate("/users") } >users</p>
        //     <p onClick={ () => navigate("/contact") } >contact us</p>
        //     <p onClick={ () => navigate("/about") } >about us</p>
        //     <p onClick={ () => navigate("/profile") } >profile</p>
        // </div>
    )
}

export default Header