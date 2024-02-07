import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Styles/Navb.css'
import Logo from './images/logo.jpg'

function Navb() {
  return (
    <>
        <header>
            <Navbar bg="white"  className='navbar'>
                <Container className='container'>
                <Navbar.Brand href="#home">
                  <img className='logo' src={Logo} alt='Logo'/>
                  <span className='logoName'>Yummy Tummy</span>
                </Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link href="#" className='active'>Foods</Nav.Link>
                    <Nav.Link href="#" className='navLink'>Desserts</Nav.Link>
                    <Nav.Link href="#" className='navLink'>Beverage</Nav.Link>
                    <Nav.Link href="#" className='navLink'>Top picks</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </header>
    </>
  );
}

export default Navb;
