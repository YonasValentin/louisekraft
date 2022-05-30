import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import IonIcon from '@reacticons/ionicons';

function NavBar() {
  return (
    <Navbar
      collapseOnSelect
      expand='lg'
      fixed='top'
      className='navbar sm:min-h-64 lg:min-h-100 bg-white'
    >
      <Container>
        <Navbar.Brand style={{ color: '#116984', fontSize: '24px' }} href='#'>
          Louise Kraft
        </Navbar.Brand>
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
              <NavDropdown.Item style={{ color: '#116984' }} href='#'>
                Hvad er ordblindhed?
              </NavDropdown.Item>
              <NavDropdown.Item style={{ color: '#116984' }} href='#'>
                Tidlige tegn på ordblindhed
              </NavDropdown.Item>
              <NavDropdown.Item style={{ color: '#116984' }} href='#'>
                Tjekliste på ordblindhed
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title={<span style={{ color: '#116984' }}>Forældre</span>}
              id='collasible-nav-dropdown'
            >
              <NavDropdown.Item style={{ color: '#116984' }} href='#'>
                Hvordan hjælper du dit barn?
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link style={{ color: '#116984' }} href='#'>
              Ydelser
            </Nav.Link>
            <NavDropdown
              title={
                <span style={{ color: '#116984' }}>For professionelle</span>
              }
              id='collasible-nav-dropdown'
            >
              <NavDropdown.Item style={{ color: '#116984' }} href='#'>
                Kurser og foredrag
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link style={{ color: '#116984' }} href='#'>
              Om mig
            </Nav.Link>
            <Nav.Link style={{ color: '#116984' }} href='#'>
              Kontakt
            </Nav.Link>
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
