//import { useEffect, useRef, useState } from 'react';
import image1 from '../images/image-cellphones.png'
import image2 from '../images/image-smartv.png'
import '../styles/banner.css'

const Banner = () => {

    /*
    const delay = 2500;
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
          () =>
            setIndex((prevIndex) =>
              prevIndex === colors.length - 1 ? 0 : prevIndex + 1
            ),
          delay
        );
    
        return () => {
          resetTimeout();
        };
      }, [index]);  
      
      style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}*/

     

    return (
        <div className='slideshow'>
            <div className="slideshowSlider" >
                <img className="slide" src={image1} alt="" />
                <img className="slide" src={image2} alt="" />
            </div>
        </div>
    );
};


export default Banner;