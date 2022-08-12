import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import logo from '../logo-icon.svg'
import { getCartThunk } from '../store/slices/cart.slice';
import SideBarCart from './SideBarCart';
import Swal from 'sweetalert2';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/navbar.css'

const NavBar = () => {

  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem("token")
  const userName = localStorage.getItem("firstName")

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () =>{
    if(token){
      setShow(true);
    } else{
      navigate('/login')
    }
  } 


  const logOut = () => {
    Swal.fire({
      title: 'Logut?',
      text: "Are you sure yo want to logout?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#f1c403',
      cancelButtonColor: '#141414',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Goodbye!',
          'See you soon.',
          'success'
        )
        localStorage.setItem("token", "")
        navigate('/')
      }
    })
  }


  


  useEffect(() => {
    dispatch(getCartThunk());
  }, []);

  document.body.style.backgroundColor = "#f8f9fa";
  /*<Navbar collapseOnSelect expand="lg" bg="light" variant="light" style={{position: "fixed", top: "0", width: "100%", zIndex: "9"}}>
        <Container>
          <Navbar.Brand href="/#/"><img src={logo} alt="" style={{ width: "110px", height: "110px", position: "absolute", marginTop: "-50px", cursor: "pointer" }} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" style={{ marginLeft: "10%" }}>
              <Nav.Link onClick={navToProducts}>Products</Nav.Link>
              <Nav.Link onClick={navToPurchases}>Purchaes</Nav.Link>
              {
                token ? (
                  <Nav.Link  onClick={logOut} style={{marginLeft: "200%", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "10px"}} >{userName} <i className="fa-solid fa-right-from-bracket"></i></Nav.Link>
                ) : (
                  <Nav.Link onClick={navToLogin} style={{ marginLeft: "200%" }}>Login</Nav.Link>
                )
              }
              <Nav.Link onClick={handleShow}><i className="fa-solid fa-cart-shopping"></i><button style={{ width: "10px", height: "10px", borderRadius: "50%", position: "absolute", border: "none", background: "red", fontSize: "7px", color: "white" }}>{cart?.length}</button></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */

  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" style={{position: "fixed", top: "0", width: "100%", zIndex: "9"}} className='nav-bar'>
      <Container>
        <Navbar.Brand href="/#/"><img src={logo} alt="" style={{ width: "110px", height: "110px", position: "absolute", marginTop: "-50px", cursor: "pointer" }} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/#/">Products</Nav.Link>
            <Nav.Link href="/#/purchases">Pusrchases</Nav.Link>
            {
                token ? (
                  <Nav.Link onClick={logOut}>{userName} <i className="fa-solid fa-right-from-bracket"></i></Nav.Link>
                ) : (
                  <Nav.Link href="/#/login">Login</Nav.Link>
                )
              }
              <Nav.Link onClick={handleShow}><i className="fa-solid fa-cart-shopping"></i><button style={{ width: "10px", height: "10px", borderRadius: "50%", position: "absolute", border: "none", background: "red", fontSize: "7px", color: "white" }}>{cart?.length}</button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <SideBarCart show={show} handleClose={handleClose}/>
      
    </>
  );
};

export default NavBar;