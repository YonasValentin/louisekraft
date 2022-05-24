import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
  return (
    <Navbar
      collapseOnSelect
      bg='dark'
      variant='dark'
      expand='lg'
      fixed='top'
      className='navbar'
    >
      <Container className='navbar__container'>
        <Navbar.Brand href='#'>Louise Kraft</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav>
            <NavDropdown title='Ordblindhed' id='collasible-nav-dropdown'>
              <NavDropdown.Item href='#'>Hvad er ordblindhed?</NavDropdown.Item>
              <NavDropdown.Item href='#'>
                Tidlige tegn på ordblindhed
              </NavDropdown.Item>
              <NavDropdown.Item href='#'>
                Tjekliste på ordblindhed
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title='Forældre' id='collasible-nav-dropdown'>
              <NavDropdown.Item href='#'>
                Hvordan hjælper du dit barn?
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='#'>Ydelser</Nav.Link>
            <NavDropdown
              title='For professionelle'
              id='collasible-nav-dropdown'
            >
              <NavDropdown.Item href='#'>Kurser og foredrag</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='#'>Kontakt</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
