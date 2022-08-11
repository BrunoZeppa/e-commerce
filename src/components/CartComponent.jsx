import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { decreaseQuantityThunk, increaseQuantityThunk, removeProductThunk } from '../store/slices/cart.slice';

const CartComponent = ({cart}) => {

  const dispatch = useDispatch();



  const total = (car) =>{
    let results = 0
    for (let i = 0; i < car.length; i++) {
      results += (car[i].productsInCart.quantity * parseInt(car[i].price))  
    }
    return results
  }

  const removeProduct = (id, e) =>{
    e?.preventDefault();
    dispatch(removeProductThunk(id))
  }

  useEffect(() =>{
    console.log("aqui no me recargo")

  },[])


console.log("me estoy recargando")

    return (
        <section className="h-100 h-custom">
        <div className="container py-5 h-100" >
          <div className="row d-flex justify-content-center align-items-center h-100" style={{ marginTop: "80px" }}>
            <div className="col">
              <div className="card">
                <div className="card-body p-4">
      
                  <div className="row">
      
                    <div className="col-lg-7">
                      <h5 className="mb-3"><a href="/" className="text-body"><i
                            className="fas fa-long-arrow-alt-left me-2"></i>Continue shopping</a></h5>
                      <hr />
      
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <div>
                          <p className="mb-1">Shopping cart</p>
                          <p className="mb-0">You have {cart.length} items in your cart</p>
                        </div>
                        <div>
                          <p className="mb-0"><span className="text-muted">Sort by:</span> <a href="#!"
                              className="text-body">price <i className="fas fa-angle-down mt-1"></i></a></p>
                        </div>
                      </div>

                      {
                        cart.map(product => (
                          <div className="card mb-3" key={product.id}>
                        <div className="card-body">
                          <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row align-items-center">
        
                              <div className="ms-3">
                                <h5>{product.title}</h5>
                                <p className="small mb-0">{product.brand}</p>
                              </div>
                            </div>
                            <div className="d-flex flex-row align-items-center">

                              <div style={{width: "50px", display: "flex", flexDirection: "row", gap: "6px"}}>
                              <button onClick={() => dispatch(decreaseQuantityThunk(product.productsInCart.quantity, product.id))} disabled={product.productsInCart.quantity == 1} style={{border: "none", background: "#ffff"}}><i className="fa-solid fa-angle-left"></i></button>
                                <h5 className="fw-normal mb-0">{product.productsInCart.quantity}</h5>
                                <button onClick={() => dispatch(increaseQuantityThunk(product.productsInCart.quantity, product.id))} style={{border: "none", background: "#ffff"}}><i className="fa-solid fa-angle-right"></i></button>
                              </div>

                              <div style={{width: "80px"}}>
                                <h5 className="mb-0">$ {product.productsInCart.quantity * parseInt(product.price)}</h5>
                              </div>
                              <button onClick={() => removeProduct(product.id)} style={{color: "#cecece", border: "none", background: "white"}}><i className="fas fa-trash-alt"></i></button>
                            </div>
                          </div>
                        </div>
                      </div>
                        ))
                      }
      
                    </div>
                    <div className="col-lg-5">
      
                      <div className="card bg-primary text-white rounded-3">
                        <div className="card-body" style={{background: "linear-gradient(#141414, darkgrey)",borderRadius: "8px"}}>
                          <div className="d-flex justify-content-between align-items-center mb-4">
                            <h5 className="mb-0">Card details</h5>
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                              className="img-fluid rounded-3" style={{width: "45px"}} alt="Avatar"/>
                          </div>
      
                          <p className="small mb-2">Card type</p>
                          <a href="#!" type="submit" className="text-white"><i
                              className="fab fa-cc-mastercard fa-2x me-2"></i></a>
                          <a href="#!" type="submit" className="text-white"><i
                              className="fab fa-cc-visa fa-2x me-2"></i></a>
                          <a href="#!" type="submit" className="text-white"><i
                              className="fab fa-cc-amex fa-2x me-2"></i></a>
                          <a href="#!" type="submit" className="text-white"><i className="fab fa-cc-paypal fa-2x"></i></a>
      
                          <form className="mt-4">
                            <div className="form-outline form-white mb-4">
                              <input type="text" id="typeName" className="form-control form-control-lg" siez="17"
                                placeholder="Cardholder's Name" />
                              <label className="form-label" htmlFor="typeName">Cardholder's Name</label>
                            </div>
      
                            <div className="form-outline form-white mb-4">
                              <input type="text" className="form-control form-control-lg" siez="17"
                                placeholder="1234 5678 9012 3457" minLength="19" maxLength="19" />
                              <label className="form-label" htmlFor="typeText">Card Number</label>
                            </div>
      
                            <div className="row mb-4">
                              <div className="col-md-6">
                                <div className="form-outline form-white">
                                  <input type="text" id="typeExp" className="form-control form-control-lg"
                                    placeholder="MM/YYYY" size="7" minLength="7" maxLength="7" />
                                  <label className="form-label" htmlFor="typeExp">Expiration</label>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-outline form-white">
                                  <input type="password" id="typeText" className="form-control form-control-lg"
                                    placeholder="&#9679;&#9679;&#9679;" size="1" minLength="3" maxLength="3" />
                                  <label className="form-label" htmlFor="typeText">Cvv</label>
                                </div>
                              </div>
                            </div>
      
                          </form>
      
                          <hr className="my-4" />
      
                          <div className="d-flex justify-content-between">
                            <p className="mb-2">Subtotal</p>
                            <p className="mb-2"> $ {Math.round((total(cart))/1.16)}.00</p>
                          </div>
      
                          <div className="d-flex justify-content-between">
                            <p className="mb-2">Shipping</p>
                            <p className="mb-2">$0.00</p>
                          </div>
      
                          <div className="d-flex justify-content-between mb-4">
                            <p className="mb-2">Taxes</p>
                            <p className="mb-2"> $ {total(cart) - Math.round((total(cart))/1.16)}</p>
                          </div>
      
                          <button type="button" className="btn btn-info btn-block btn-lg" style={{background: "#f85555"}}>
                            <div className="d-flex justify-content-between">
                              <span>$ {total(cart)} Pay</span>
                              <span> <i className="fas fa-long-arrow-alt-right ms-2"></i></span>
                            </div>
                          </button>
      
                        </div>
                      </div>
      
                    </div>
      
                  </div>
      
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default CartComponent;