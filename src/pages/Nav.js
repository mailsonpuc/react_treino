import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


const Nav = () => {
  return (
    <div>
       <Navbar className="bg-dark">
      <Container>
        <Navbar.Brand href="/home" className='text-light'>BItcoin</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text >
            
            <a href="/login" className='text-light'>
           
            <Link to="/login">Login</Link>
            </a>
            

          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
    


  
    </div>
  )
}

export default Nav;
