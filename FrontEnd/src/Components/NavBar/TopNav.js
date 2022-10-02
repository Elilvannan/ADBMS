import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './style.css'
import { Link, NavLink } from "react-router-dom";


const TopNav = () => {
    return (
        <>
            {[false].map((expand) => (
                <Navbar key={expand} bg="light" expand={expand} className="mb-3 topNavCross">
                    <Container fluid>
                        <Navbar.Brand href="#">KULATHOOR SUVAI ARUVI</Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="start"
                            className='toggleNav'
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    KSA - Batticalo
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link href="/"  className='linksFor text-center my-1 p-3'>
                                        <NavLink>
                                            <Link to="/" className='theLink'>HOME</Link>
                                        </NavLink>
                                    </Nav.Link>
                                    <Nav.Link href="/food" className='linksFor text-center my-1 p-3'>
                                        <NavLink>
                                            <Link to="/food" className='theLink'>FOOD</Link>
                                        </NavLink>
                                    </Nav.Link>
                                    <Nav.Link href="#" className='linksFor text-center my-1 p-3'>
                                        <NavLink>
                                            <Link to="/n" className='theLink'>ROOM</Link>
                                        </NavLink>
                                    </Nav.Link>
                                    <Nav.Link href="#" className='linksFor text-center my-1 p-3'>
                                        <NavLink>
                                            <Link to="/n" className='theLink'>CONTACT US</Link>
                                        </NavLink>
                                    </Nav.Link>
                                    <Nav.Link href="#" className='linksFor text-center my-1 p-3'>
                                        <NavLink>
                                            <Link to="/login" className='theLink'>LOGIN</Link>
                                        </NavLink>
                                    </Nav.Link>
                                    <Nav.Link href="#" className='linksFor text-center my-1 p-3'>
                                        <NavLink>
                                            <Link to="/reg" className='theLink'>REGISTER</Link>
                                        </NavLink>
                                    </Nav.Link>
                                </Nav>

                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    )
}

export default TopNav