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
      if (window.innerWidth > 1024) {
        setImages(['/images/one.jpg', '/images/ft.jpg', '/images/photo_2024-12-24_19-21-28.jpg','/images/photo_2024-12-24_19-15-36.jpg','/images/photo_2024-12-24_19-15-36.jpg']);
      } else if (window.innerWidth > 768) {
        setImages(['/images/photo_2024-12-24_19-15-36.jpg', '/images/photo_2024-12-24_19-15-36.jpg', '/images/photo_2024-12-24_19-15-36.jpg']);
      } else {
        setImages(['/images/sn.jpg', '/images/photo_2024-12-24_19-15-36.jpg', '/images/photo_2024-12-24_19-15-36.jpg']);
      }
    };

    updateImages(); // Set on mount
    window.addEventListener('resize', updateImages); // Update on resize

    return () => window.removeEventListener('resize', updateImages); // Cleanup
  }, []);

  return (
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
  );
};

export default App;
