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
        <Navbar.Brand href='#'>Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav>
            <Nav.Link href='#'>Link</Nav.Link>
            <Nav.Link href='#'>Link</Nav.Link>
            <Nav.Link href='#'>Link</Nav.Link>
            <Nav.Link href='#'>Link</Nav.Link>
            <NavDropdown title='Dropdown' id='collasible-nav-dropdown'>
              <NavDropdown.Item href='#'>Action</NavDropdown.Item>
              <NavDropdown.Item href='#'>Another action</NavDropdown.Item>
              <NavDropdown.Item href='#'>Something</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
