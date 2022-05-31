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
    <Navbar
      collapseOnSelect
      expand='lg'
      fixed='top'
      className='navbar sm:min-h-64 lg:min-h-100 bg-white'
    >
      <Container>
        <Link href='#' passHref>
          <Navbar.Brand style={{ color: '#116984', fontSize: '24px' }}>
            Louise Kraft
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle
          style={{
            border: 'none',
            outline: 'none',
            boxShadow: 'none',
            color: '#116984',
          }}
          aria-controls='responsive-navbar-nav'
        >
          <span>
            <IonIcon
              style={{ height: '100%', width: '40px', display: 'flex' }}
              name='menu-outline'
            ></IonIcon>
          </span>
        </Navbar.Toggle>

        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav>
            <NavDropdown
              className='border-0'
              style={{
                border: 'none',
                color: '#116984',
                '::after': { color: '#116984' },
                marginRight: '20px',
                backgroundColor: '#8766',
              }}
              title={<span style={{ color: '#116984' }}>Ordblindhed</span>}
              id='collasible-nav-dropdown'
            >
              <Link href='#' passHref>
                <NavDropdown.Item style={{ color: '#116984' }} href='#'>
                  Hvad er ordblindhed?
                </NavDropdown.Item>
              </Link>

              <Link href='#' passHref>
                <NavDropdown.Item style={{ color: '#116984' }}>
                  Tidlige tegn på ordblindhed
                </NavDropdown.Item>
              </Link>

              <Link href='#' passHref>
                <NavDropdown.Item style={{ color: '#116984' }}>
                  Tjekliste på ordblindhed
                </NavDropdown.Item>
              </Link>
            </NavDropdown>
            <NavDropdown
              title={<span style={{ color: '#116984' }}>Forældre</span>}
              id='collasible-nav-dropdown'
            >
              <Link href='#' passHref>
                <NavDropdown.Item style={{ color: '#116984' }}>
                  Hvordan hjælper du dit barn?
                </NavDropdown.Item>
              </Link>
            </NavDropdown>

            <Link href='#' passHref>
              <Nav.Link style={{ color: '#116984' }}>Ydelser</Nav.Link>
            </Link>

            <NavDropdown
              title={
                <span style={{ color: '#116984' }}>For professionelle</span>
              }
              id='collasible-nav-dropdown'
            >
              <Link href='#' passHref>
                <NavDropdown.Item style={{ color: '#116984' }}>
                  Kurser og foredrag
                </NavDropdown.Item>
              </Link>
            </NavDropdown>

            <Link href='#' passHref>
              <Nav.Link style={{ color: '#116984' }}>Om mig</Nav.Link>
            </Link>

            <Link href='#' passHref>
              <Nav.Link style={{ color: '#116984' }}>Kontakt</Nav.Link>
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
