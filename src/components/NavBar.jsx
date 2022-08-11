import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import logo from '../logo-icon.svg'
import { getCartThunk } from '../store/slices/cart.slice';
import SideBarCart from './SideBarCart';
import Swal from 'sweetalert2';


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
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#f85555',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        localStorage.setItem("token", "")
        navigate("/#/login")
      }
    })
  }


  useEffect(() => {
    dispatch(getCartThunk());
  }, []);

  document.body.style.backgroundColor = "#f8f9fa";

  return (
    <>
      <Navbar bg="light" expand="lg" style={{ position: "fixed", width: "100vw", zIndex: "9" }}>
        <Container>
          <Navbar.Brand href="/#/"><img src={logo} alt="" style={{ width: "110px", height: "110px", position: "absolute", marginTop: "-50px", cursor: "pointer" }} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" style={{ marginLeft: "10%" }}>
              <Nav.Link href="/#/">Products</Nav.Link>
              <Nav.Link href="/#/purchases">Purchaes</Nav.Link>
              {
                token ? (
                  <Nav.Link  onClick={logOut} style={{marginLeft: "200%"}} >{userName}</Nav.Link>
                ) : (
                  <Nav.Link href="/#/login" style={{ marginLeft: "200%" }}>Login</Nav.Link>
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