import {Link, Outlet} from "react-router-dom";
import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import {useAuth} from "../contexts/AuthContext";

const Layout = () => {
    const {username, loading} = useAuth();

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand as={Link} to="/">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            { !username && <Nav.Link as={Link} to="/login">Login</Nav.Link> }
                            { !username && <Nav.Link as={Link} to="/register">Register</Nav.Link> }
                            { username && <Nav.Link as={Link} to="/logout">Logout</Nav.Link> }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet/>
        </>
    )
}

export default Layout;