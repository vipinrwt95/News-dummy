import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function HeaderNavigation() {
  return (
    <Navbar bg="warning" title="news" expand="lg">
      <Container>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="#home">Headlines</Nav.Link>
            <Nav.Link href="#finance">Finance</Nav.Link>
            <Nav.Link href="#Indian politics">Indian Politics</Nav.Link>
            <Nav.Link href="#Geo politics">Geo Politics</Nav.Link>
            <Nav.Link href="#Sports">Sports</Nav.Link>
            <NavDropdown title="Local News" href="local" id="basic-nav-dropdown">
              <NavDropdown.Item bg="warning" href="#action/3.1">Delhi</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Mumbai
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Kolkata</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Chennai</NavDropdown.Item>
              
             </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderNavigation;