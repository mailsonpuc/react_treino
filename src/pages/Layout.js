import { Outlet, Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


const Layout = () => {
    return (
      <>
       <Navbar className="bg-dark">
      <Container>
        <Navbar.Brand href="/home" className='text-light'>BItcoin</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text >
            
          <ul className='text-light'>
            <li >
              <Link to="/" className='text-light'>Home</Link>
            </li>
            <li>
              <Link to="/login" className='text-light'>Login</Link>
            </li>
            <li >
              <Link to="/contact" className='text-light'>Contact</Link>
            </li>

    
          </ul>

          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>

       
          
       
  
        <Outlet />
      </>
    )
  };

export default Layout;