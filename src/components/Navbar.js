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
                    <Nav.Link href="#" className='active'>FOODS</Nav.Link>
                    <Nav.Link href="#" className='navLink'>DESSERTS</Nav.Link>
                    <Nav.Link href="#" className='navLink'>BEVERAGE</Nav.Link>
                    <Nav.Link href="#" className='navLink'>OTHERS</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </header>
    </>
  );
}

export default Navb;
