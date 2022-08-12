import React, { useEffect } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { decreaseQuantityThunk, getCartThunk, increaseQuantityThunk, removeProductThunk } from '../store/slices/cart.slice';

const SideBarCart = ({ show, handleClose, }) => {

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getCartThunk())
    }, [])

    const checkout = () => {
        navigate('/cart')
        handleClose();
    }
    const removeProduct = (id, e) => {
        e?.preventDefault();
        dispatch(removeProductThunk(id))
    }

    const disableCheckoutButton = (car) =>{
        if(car.length == 0){
            return "#808080"
        }else{
           return "#f85555"
        }
    }

    const total = (car) =>{
        let results = 0
        for (let i = 0; i < car.length; i++) {
          results += (car[i].productsInCart.quantity * parseInt(car[i].price))  
        }
        return results
      }

    return (
        <Offcanvas show={show} onHide={handleClose} placement={'end'}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title><p className="mb-0">You have {cart.length} items in your cart</p></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body style={{display: "flex", flexDirection: "column" }}>
                {
                    cart.map(product => (
                        <div className="card mb-3" key={product.id} onClick={() => navigate(`/product/${product.id}`)} style={{cursor: "pointer"}}>
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex flex-row align-items-center">

                                        <div className="ms-3">
                                            <h5 style={{fontSize: "14px"}}>{product.title}</h5>
                                            <p className="small mb-0">{product.brand}</p>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-row align-items-center">

                                        <div style={{ width: "50px", display: "flex", flexDirection: "row", gap: "6px" }}>
                                            <button onClick={() => dispatch(decreaseQuantityThunk(product.productsInCart.quantity, product.id))} disabled={product.productsInCart.quantity == 1} style={{ border: "none", background: "#ffff" }}><i className="fa-solid fa-angle-left"></i></button>
                                            <h5 className="fw-normal mb-0">{product.productsInCart.quantity}</h5>
                                            <button onClick={() => dispatch(increaseQuantityThunk(product.productsInCart.quantity, product.id))} style={{ border: "none", background: "#ffff" }}><i className="fa-solid fa-angle-right"></i></button>
                                        </div>

                                        <div style={{ width: "80px" }}>
                                            <h5 className="mb-0" style={{color: "#141414", fontSize: "17px"}}>$ {product.productsInCart.quantity * parseInt(product.price)}</h5>
                                        </div>
                                        <button onClick={() => removeProduct(product.id)} style={{ color: "#cecece", border: "none", background: "white" }}><i className="fas fa-trash-alt"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
                <p> Total:<span>$ {total(cart)}.00</span></p>
                <hr />
                <button onClick={checkout} style={{background: disableCheckoutButton(cart), width: "100px", height: "40px", border: "none", color: "#ffff"}} disabled={cart.length == 0}>Checkout</button>
            </Offcanvas.Body>
        </Offcanvas>
    );
};


export default SideBarCart;