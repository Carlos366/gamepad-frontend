import {
  Button,
  Container,
  Form,
  Nav,
  NavDropdown,
  Navbar,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      expand='lg'
      variant='dark'
      sticky='top'
      className='p-3'
    >
      <Container fluid>
        <Navbar.Brand
          as={Link}
          to='/'
          className='d-flex align-items-center fs-3'
        >
          <img src='/logo.png' width='100' height='auto' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto fs-5'>
            <NavDropdown title='Games' id='collasible-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>PC</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>
                Playstation
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Nintendo</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.4'>Xbox</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>All Games</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='#features'>Upcoming</Nav.Link>
            <Nav.Link href='#pricing'>Favourites</Nav.Link>
          </Nav>
          <Nav>
            <Form className='d-flex'>
              <Form.Control
                type='search'
                placeholder='Search'
                className='me-2'
                aria-label='Search'
              />
            </Form>
            <Button variant='light' className='fs-5'>
              Sign In
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
