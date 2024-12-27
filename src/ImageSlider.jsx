import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./imageSlider.css";

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 3 },
  desktop: { breakpoint: { max: 1024, min: 768 }, items: 3 },
  tablet: { breakpoint: { max: 768, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const App = () => {
  const [images, setImages] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(1); // Default to mobile view

  // Update visible items based on screen size
  const determineVisibleItems = () => {
    const width = window.innerWidth;
    if (width > 1024) {
      setVisibleItems(3); // SuperLargeDesktop
    } else if (width > 768) {
      setVisibleItems(3); // Desktop
    } else if (width > 464) {
      setVisibleItems(2); // Tablet
    } else {
      setVisibleItems(1); // Mobile
    }
  };

  const handleSlideChange = (currentSlide) => {
    setActiveIndex(currentSlide);
  };

  useEffect(() => {
    determineVisibleItems(); // Set on mount
    window.addEventListener("resize", determineVisibleItems); // Update on resize

    // Set images based on screen size
    const updateImages = () => {
      if (window.innerWidth > 768) {
        setImages([
          "/images/1-zylh/IMG_4994.JPG",
          "/images/2-bly/IMG_4992.JPG",
          "/images/3-hda/IMG_4971.JPG",
          "/images/4-dph/IMG_4999.JPG",
          "/images/5-twa/IMG_5004.JPG",
          "/images/6-amt/IMG_5006.JPG",
          "/images/7-khh/IMG_5010.JPG",
          "/images/8-ths/IMG_5012.JPG",
          "/images/9-kzo/IMG_4936.JPG",
          "/images/10-wca/IMG_5017.JPG",
        ]);
      } else {
        setImages([
          "/images/1-zylh/IMG_4993.JPG",
          "/images/2-bly/IMG_4990.JPG",
          "/images/3-hda/IMG_4996.JPG",
          "/images/4-dph/IMG_4998.JPG",
          "/images/5-twa/IMG_5002.JPG",
          "/images/6-amt/IMG_5005.JPG",
          "/images/7-khh/IMG_5008.JPG",
          "/images/8-ths/IMG_5011.JPG",
          "/images/9-kzo/IMG_5014.JPG",
          "/images/10-wca/IMG_5015.JPG",
        ]);
      }
    };

    updateImages(); // Set on mount
 
    return () => {
      window.removeEventListener("resize", determineVisibleItems);

    }; // Cleanup
  }, []);

  return (
    <div className="container">
      <div className="carousel-container">
        <Carousel
          responsive={responsive}
          draggable={true}
          swipeable={true}
          afterChange={(previousSlide, { currentSlide }) => handleSlideChange(currentSlide)}
        >
          {images.map((src, index) => (
            <div key={index} style={{ position: "relative" }}>
              <img src={src} className="carousel-image" alt={`Carousel Item ${index + 1}`} />
              <div
                className={`carousel-text ${
                  index >= activeIndex && index < activeIndex + visibleItems ? "animate" : ""
                }`}
              >
                <p>Mg Zeyar Lynn Htut</p>
                <p>Section-A</p>
                <p>No-7</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default App;
