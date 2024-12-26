import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './imageSlider.css'
const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 3 },
  desktop: { breakpoint: { max: 1024, min: 768 }, items: 3 },
  tablet: { breakpoint: { max: 768, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const App = () => {
  const [images, setImages] = useState(['/images/small-image.png']); // Default image array
const CustomLeftArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        position: 'absolute',
        left: 16,
        top: '50%',
        transform: 'translateY(-50%)',
        background: 'rgba(0, 0, 0, 0.6)', // Transparent black
        border: 'none', // Remove default border
        padding: '10px', // Add spacing for better appearance
        cursor: 'pointer',
        zIndex: 1000,
        display: 'flex', // Center the content
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img src="/images/arrow.png" alt="Left Arrow" style={{ width: 15, height: 'auto' }} />
    </button>
  );
};


// Custom Right Arrow Component
const CustomRightArrow = ({ onClick }) => {
   return (
    <button
      onClick={onClick}
      style={{
        position: 'absolute',
        right: 16,
        top: '50%',
        transform: 'translateY(-50%)',
        background: 'rgba(0, 0, 0, 0.6)', // Transparent black
        border: 'none', // Remove default border
     // Optional: make it circular
        padding: '10px', // Add spacing for better appearance
        cursor: 'pointer',
        zIndex: 1000,
        display: 'flex', // Center the content
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img src="/images/right-arrow.png" alt="Right Arrow" width={15} height={'auto'} />
    </button>
  );
};


  useEffect(() => {
    const updateImages = () => {
     if (window.innerWidth > 768) {
        setImages(['/images/1-zylh/IMG_4994.JPG', '/images/2-bly/IMG_4992.JPG', '/images/3-hda/IMG_4971.JPG','/images/4-dph/IMG_4999.JPG','/images/5-twa/IMG_5004.JPG','/images/6-amt/IMG_5006.JPG','/images/7-khh/IMG_5010.JPG','/images/8-ths/IMG_5012.JPG','/images/9-kzo/IMG_4936.JPG','/images/10-wca/IMG_5017.JPG']);
      } else {
        setImages(['/images/1-zylh/IMG_4993.JPG', '/images/2-bly/IMG_4990.JPG', '/images/3-hda/IMG_4996.JPG','/images/4-dph/IMG_4998.JPG','/images/5-twa/IMG_5002.JPG','/images/6-amt/IMG_5005.JPG','/images/7-khh/IMG_5008.JPG','/images/8-ths/IMG_5011.JPG','/images/9-kzo/IMG_5014.JPG','/images/10-wca/IMG_5015.JPG']);
      }
    };

    updateImages(); // Set on mount
    window.addEventListener('resize', updateImages); // Update on resize

    return () => window.removeEventListener('resize', updateImages); // Cleanup
  }, []);

  return (
    <div className='container'>
      
    <div className="carousel-container">
    <Carousel
      responsive={responsive}
      draggable={true}
      swipeable={true}
      customRightArrow={<CustomRightArrow/>}
      customLeftArrow={<CustomLeftArrow/>}
    >
      {images.map((src, index) => (
        <div key={index}>
          <img src={src} className='carousel-image' alt={`Carousel Item ${index + 1}`}  />
        </div>
      ))}
    </Carousel>    
    </div>
     <div class="footer-container">
       <div id="outer-div">
          <div class="inner-div">2024-2025 UCSMGY FRESHER WELCOME</div>

       </div>
     </div>

    </div>
  );
};

export default App;
