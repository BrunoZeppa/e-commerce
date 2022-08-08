import React from 'react'
import image1 from '../images/image-cellphones.png'
import image2 from '../images/image-smartv.png'
import '../styles/banner.css'

const Banner = () => {

    return (
        <div className='banner-component'>
            <img src={image1} alt="" />
            <img src={image2} alt="" />
        </div>
    );
};

export default Banner;