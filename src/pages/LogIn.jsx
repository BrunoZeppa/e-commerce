import '../styles/logIn.css'
import logo from '../logo-icon.svg'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const LogIn = () => {

    const { handleSubmit, register, reset } = useForm();
    const navigate = useNavigate();

    const submit = data => {
        axios.post('https://ecommerce-api-react.herokuapp.com/api/v1/users/login', data)
            .then(res => {
                navigate('/')
                localStorage.setItem("token", res.data.data.token)
                localStorage.setItem("firstName", res.data.data.user.firstName)
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: `welcome ${localStorage.getItem("firstName")}`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            })
            ?.catch(error => {
                if(error.response?.status == 404){
                    Swal.fire({
                        icon: 'error',
                        title: 'Invalid credentials',
                        text: 'Password or username is wrong',
                      })
                }
                console.log(error)
            });
        reset({
            email: "",
            password: "",
        });
    }




    return (
        <section className="h-100 gradient-form">
            <div className="container py-5 h-100" >
                <div className="row d-flex justify-content-center align-items-center h-100" style={{ marginTop: "60px" }}>
                    <div className="col-xl-10">
                        <div className="card rounded-3 text-black">
                            <div className="row g-0">
                                <div className="col-lg-6">
                                    <div className="card-body p-md-5 mx-md-4">

                                        <div className="text-center">
                                            <img src={logo}
                                                style={{ width: "185px" }} alt="logo" />
                                            <h4 className="mt-1 mb-5 pb-1">We are The E-Commerce Team</h4>
                                        </div>

                                        <form onSubmit={handleSubmit(submit)}>
                                            <p>Please login to your account</p>

                                            <div className="form-outline mb-4">
                                                <input type="email" id="form2Example11" className="form-control"
                                                    placeholder="Phone number or email address" {...register("email")} />
                                                <label className="form-label" htmlFor="form2Example11">Email</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="password" id="form2Example22" className="form-control" {...register("password")} />
                                                <label className="form-label" htmlFor="form2Example22">Password</label>
                                            </div>

                                            <div className="text-center pt-1 mb-5 pb-1">
                                                <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit">Log
                                                    in</button>
                                                <a className="text-muted" href="#!">Forgot password?</a>
                                            </div>

                                            <div className="d-flex align-items-center justify-content-center pb-4">
                                                <p className="mb-0 me-2">Don't have an account?</p>
                                                <button type="button" className="btn btn-outline-danger" onClick={() => navigate('/register')}>Create new</button>
                                            </div>

                                        </form>

                                    </div>
                                </div>
                                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                                    <div className="text-white px-3 py-4 p-md-5 mx-md-4" style={{textAlign: "center"}}>
                                        <h4 className="mb-4">"To enter, copy/paste the DEMO user into the blank fields" <br /><br /> 
                                        <span style={{fontSize: "12px"}}>Email:</span><br />
                                            zegb94@gmail.com <br /><br />
                                            <span style={{fontSize: "12px"}}>Password:</span> <br />
                                            Bruno12345

                                        </h4>
                                        <p className="small mb-0" style={{color: "red"}}>Or create a new user</p>
                    
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

export default LogIn;