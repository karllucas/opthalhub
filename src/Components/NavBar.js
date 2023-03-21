import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { MDBBtn } from 'mdb-react-ui-kit';

function NavBar({ logout, user }) {
  return (
    <Navbar sticky="top" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">OPTHALMOLO HUB</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: {user.name}{' '}
          </Navbar.Text>
          <MDBBtn 
            className='me-1 ms-3' 
            color='danger'
            onClick={
              () => 
                logout({ 
                  returnTo: window.location.origin 
                })
            }
            >
              Logout
          </MDBBtn>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;