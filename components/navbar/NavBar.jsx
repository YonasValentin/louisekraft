import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import IonIcon from '@reacticons/ionicons';
import Link from 'next/link';

function NavBar() {
  return (
    <Navbar collapseOnSelect expand='lg' fixed='top' className='navbar'>
      <Container className='navbar__container'>
        <Link href='#' passHref>
          <Navbar.Brand className='navbar__brand'>Louise Kraft</Navbar.Brand>
        </Link>

        <Navbar.Toggle
          className='navbar__toggle'
          aria-controls='responsive-navbar-nav'
        >
          <span>
            <IonIcon
              className='navbar__toggle-icon'
              name='menu-outline'
            ></IonIcon>
          </span>
        </Navbar.Toggle>

        <Navbar.Collapse
          className='navbar__collapse'
          id='responsive-navbar-nav'
        >
          <Nav>
            <NavDropdown
              className='navbar__item'
              title={<span className='navbar__item'>Ordblindhed</span>}
              id='collasible-nav-dropdown'
            >
              <Link href='#' passHref>
                <NavDropdown.Item className='navbar__item' href='#'>
                  Hvad er ordblindhed?
                </NavDropdown.Item>
              </Link>

              <Link href='#' passHref>
                <NavDropdown.Item className='navbar__item'>
                  Tidlige tegn på ordblindhed
                </NavDropdown.Item>
              </Link>

              <Link href='#' passHref>
                <NavDropdown.Item className='navbar__item'>
                  Tjekliste på ordblindhed
                </NavDropdown.Item>
              </Link>
            </NavDropdown>
            <NavDropdown
              title={<span className='navbar__item'>Forældre</span>}
              id='collasible-nav-dropdown'
            >
              <Link href='#' passHref>
                <NavDropdown.Item className='navbar__item'>
                  Hvordan hjælper du dit barn?
                </NavDropdown.Item>
              </Link>
            </NavDropdown>

            <Link href='#' passHref>
              <Nav.Link className='navbar__item'>Ydelser</Nav.Link>
            </Link>

            <NavDropdown
              title={<span className='navbar__item'>For professionelle</span>}
              id='collasible-nav-dropdown'
            >
              <Link href='#' passHref>
                <NavDropdown.Item className='navbar__item'>
                  Kurser og foredrag
                </NavDropdown.Item>
              </Link>
            </NavDropdown>

            <Link href='#' passHref>
              <Nav.Link className='navbar__item'>Om mig</Nav.Link>
            </Link>

            <Link href='#' passHref>
              <Nav.Link className='navbar__item'>Kontakt</Nav.Link>
            </Link>

            <Link href='#' passHref>
              <Nav.Link className='navbar__item'>Book tid</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

/*<TimePicker
inputFormat='HH:mm'
minTime={new Date(0, 0, 0, 12)}
maxTime={new Date(0, 0, 0, 16)}
ampm={false}
renderInput={(props) => <TextField {...props} />}
minutesStep={30}
value={time}
onChange={(time) => setTime(time)}
defaultValue={new Date(0, 0, 0, 12)}
></TimePicker> */
