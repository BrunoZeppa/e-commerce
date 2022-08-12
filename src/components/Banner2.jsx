import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../images/image-cellphones.png';
import image2 from '../images/image-smartv.png';
import image3 from '../images/laptop-banner.png';

const Banner2 = () => {


    return (
            <Carousel style={{width: "100vw", boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}}>
              <Carousel.Item interval={3000} style={{width: "100%", objectFit: "contain"}}>
                <img
                  className="d-block w-100"
                  src={image1}
                  alt="First slide"
                  
                />
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <img
                  className="d-block w-100"
                  src={image2}
                  alt="Second slide"
                  style={{width: "100%"}}
                />
    
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={image3}
                  alt="Third slide"
                  style={{width: "100%"}}
                />
              
              </Carousel.Item>
            </Carousel>
        
    );
};

export default Banner2;