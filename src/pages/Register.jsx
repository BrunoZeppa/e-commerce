import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../styles/register.css';
import logo from '../logo-icon.svg'
import { signUpThunk } from '../store/slices/userPurchases.slice';
import Swal from 'sweetalert2';

const Register = () => {

    const navigate = useNavigate();
    const { handleSubmit, register } = useForm();
    const dispatch = useDispatch();

    const submit = data => {
        //dispatch(signUpThunk(data))
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: `Congrats ${data.firstName}! Now login with your new account`,
            showConfirmButton: true,
          })
        console.log(data)
        navigate('/login')
    }

    return (
        <section className="h-100 gradient-form">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100" style={{ marginTop: "60px" }}>
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black" style={{borderRadius: "25px"}}>
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                        <form className="mx-1 mx-md-4" onSubmit={handleSubmit(submit)}>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input 
                                                    type="text" 
                                                    id="form3Example1c" 
                                                    className="form-control"
                                                    required
                                                    { ...register("firstName")}
                                                     />
                                                    <label className="form-label" htmlFor="form3Example1c">First Name</label>
                            
                                                    <input 
                                                    type="text" 
                                                    className="form-control"
                                                    required   
                                                    { ...register("lastName")}
                                                     />
                                                    <label className="form-label" htmlFor="form3Example1c">Last Name</label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input 
                                                    type="email" 
                                                    id="form3Example3c" 
                                                    className="form-control" 
                                                    required
                                                    { ...register("email")}
                                                    />
                                                    <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input 
                                                    type="password" 
                                                    id="form3Example4c" 
                                                    className="form-control"
                                                    required
                                                    { ...register("password")} 
                                                    />
                                                    <label className="form-label" htmlFor="form3Example4c">Password</label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fa-solid fa-phone" style={{fontSize: "20px", marginRight: "17px"}}></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input 
                                                    type="phone" 
                                                    id="form3Example4cd" 
                                                    className="form-control"
                                                    required
                                                    { ...register("phone")}  
                                                    />
                                                    <label className="form-label" htmlFor="form3Example4cd">Phone</label>
                                                </div>
                                            </div>

                                            <div className="form-check d-flex justify-content-center mb-5">
                                                <input 
                                                className="form-check-input me-2" 
                                                type="checkbox"  
                                                id="form2Example3c"
                                                required
                                                />
                                                <label className="form-check-label" htmlFor="form2Example3">
                                                    I agree all statements in <a href="#!" style={{color: "#f85555"}}>Terms of service</a>
                                                </label>
                                            </div>

                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button type="submit" className="btn btn-primary btn-lg" style={{background: "#f85555", border: "none"}}>Register</button>
                                            </div>

                                        </form>

                                    </div>
                                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                        <img src={logo}
                                            className="img-fluid" alt="Sample image" />

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

export default Register;