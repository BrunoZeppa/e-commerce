import React, { useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../logo-icon.svg'
import { getCartThunk } from '../store/slices/cart.slice';

const NavBar = () => {

  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartThunk());
},[]);

  document.body.style.backgroundColor = "#f8f9fa";

    return (
        <Navbar bg="light" expand="lg" style={{position: "fixed",width: "100vw", zIndex: "9"}}>
        <Container>
          <Navbar.Brand href="/#/"><img src={logo} alt="" style={{width: "110px", height: "110px", position: "absolute", marginTop: "-50px",cursor: "pointer"}} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" style={{marginLeft: "70%"}}>
              <Nav.Link href="/#/">Products</Nav.Link>
              <Nav.Link href="/#/purchases">Purchaes</Nav.Link>
              <Nav.Link href="/#/login">Login</Nav.Link>
              <Nav.Link href="/#/cart"><i className="fa-solid fa-cart-shopping"></i><button style={{width: "10px", height: "10px", borderRadius: "50%", position: "absolute", border: "none", background: "red", fontSize: "7px", color: "white"}}>{cart?.length}</button></Nav.Link>  
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default NavBar;