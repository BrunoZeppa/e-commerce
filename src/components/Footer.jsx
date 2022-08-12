import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/footer.css'

const Footer = () => {

    const navigate = useNavigate();



    return (
        <div className='footer'>
            <div>
                <h6>About us</h6>
                <p>Privacy of service</p>
                <p>Terms of service</p>
                <p>Cookie policy</p>
                <p>FAC</p>
            </div>

            <div>
                <h6>Products</h6>
                <p>Smart tv's</p>
                <p>Smartphones</p>
                <p>Computers</p>
                <p>Technologie</p>
            </div>

            <div>
                <h6>Address</h6>
                <p>47 W 13th St, NY 10011</p>
                <p>Free shipping in the us</p>
            </div>

            <div>
                <h6>Social media</h6>
                <p style={{fontSize: "20px"}}><i className="fa-brands fa-square-facebook"></i> <i className="fa-brands fa-instagram"></i> <i className="fa-brands fa-youtube"></i></p>
            </div>


        </div>
    );
};

export default Footer;