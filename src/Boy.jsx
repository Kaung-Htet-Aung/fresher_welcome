import React, { useState, useEffect, useRef, } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./style.css";
import { Link,useParams } from "react-router-dom";
const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 3 },
  desktop: { breakpoint: { max: 1024, min: 768 }, items: 3 },
  tablet: { breakpoint: { max: 768, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};
const CustomLeftArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        position: "absolute",
        left: "15px",
        top: "46%",
        transform: "translateY(-50%)",
        background: 'rgba(0, 0, 0, 0.5)',
        color: "white",
        border: "none",
        borderRadius: "50%",
        width: "30px",
        height: "30px",
        cursor: "pointer",
        zIndex: 1000,
        display: "flex", // Flexbox for centering
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img src="./images/arrow.png" alt="" width={'15px'} height={'15px'}/>
    </button>
  );
};

const CustomRightArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        position: "absolute",
        right: "15px",
        top: "45%",
        transform: "translateY(-50%)",
        background: 'rgba(0, 0, 0, 0.5)', /* Transparent background */
        color: "white",
        border: "none",
        borderRadius: "50%",
        width: "30px",
        height: "30px",
        cursor: "pointer",
        zIndex: 1000,
        display: "flex", // Flexbox for centering
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img src="./images/right-arrow.png" alt="" width={'15px'} height={'15px'}/>
    </button>
  );
};
const Boy = () => {
  const [images, setImages] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(1);
 
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
 const handleGetValue = () => {
    const paperContent = paperRef.current.innerText; // Get plain text content
    console.log("Paper Content:", paperContent);
  };

  useEffect(() => {
    determineVisibleItems(); // Set on mount
    window.addEventListener("resize", determineVisibleItems); // Update on resize

    // Set images based on screen size
    const updateImages = () => {
      if (window.innerWidth > 768) {
         setImages([
          {
            imgSrc:"/images/1-zylh/IMG_4994.JPG",
            name:'Mg Kaung Htet Aung',
            section:"A",
            no:7
          },
           {
            imgSrc:"/images/2-bly/IMG_4990.JPG",
            name:'Mg Kaung Htet Aung',
            section:"A",
            no:7
          },
           {
            imgSrc:"/images/3-hda/IMG_4996.JPG",
            name:'Mg Kaung Htet Aung',
            section:"A",
            no:7
          },
           {
            imgSrc: "/images/4-dph/IMG_4998.JPG",
            name:'Mg Kaung Htet Aung',
            section:"A",
            no:7
          },
           {
            imgSrc:"/images/5-twa/IMG_5002.JPG",
            name:'Mg Kaung Htet Aung',
            section:"A",
            no:7
          },
           {
            imgSrc:"/images/6-amt/IMG_5005.JPG",
            name:'Mg Kaung Htet Aung',
            section:"A",
            no:7
          },
           {
            imgSrc:"/images/7-khh/IMG_5008.JPG",
            name:'Mg Kaung Htet Aung',
            section:"A",
            no:7
          },
           {
            imgSrc:"/images/8-ths/IMG_5011.JPG",
            name:'Mg Kaung Htet Aung',
            section:"A",
            no:7
          },
           {
            imgSrc: "/images/9-kzo/IMG_5014.JPG",
            name:'Mg Kaung Htet Aung',
            section:"A",
            no:7
          },
           {
            imgSrc:"/images/10-wca/IMG_5015.JPG",
            name:'Mg Kaung Htet Aung',
            section:"A",
            no:7
          },
         
        ]);
       
      } else {
        setImages([
          {
            imgSrc:'/images/1-zylh/IMG_4993.JPG',
            name:'Mg Kaung Htet Aung',
            section:"B",
            no:1
          },
           {
            imgSrc:"/images/2-bly/IMG_4990.JPG",
            name:'Mg Kaung Htet Aung',
            section:"A",
            no:2
          },
           {
            imgSrc:"/images/3-hda/IMG_4996.JPG",
            name:'Mg Kaung Htet Aung',
            section:"B",
            no:3
          },
           {
            imgSrc: "/images/4-dph/IMG_4998.JPG",
            name:'Mg Kaung Htet Aung',
            section:"B",
            no:4
          },
           {
            imgSrc:"/images/5-twa/IMG_5002.JPG",
            name:'Mg Kaung Htet Aung',
            section:"C",
            no:5
          },
           {
            imgSrc:"/images/6-amt/IMG_5005.JPG",
            name:'Mg Kaung Htet Aung',
            section:"A",
            no:6
          },
           {
            imgSrc:"/images/7-khh/IMG_5008.JPG",
            name:'Mg Kaung Htet Aung',
            section:"B",
            no:7
          },
           {
            imgSrc:"/images/8-ths/IMG_5011.JPG",
            name:'Mg Kaung Htet Aung',
            section:"C",
            no:8
          },
           {
            imgSrc: "/images/9-kzo/IMG_5014.JPG",
            name:'Mg Kaung Htet Aung',
            section:"B",
            no:9
          },
           {
            imgSrc:"/images/10-wca/IMG_5015.JPG",
            name:'Mg Kaung Htet Aung',
            section:"B",
            no:10
          },
         
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
       <nav>
        <div className="logo">
            <img src="./images/logo.webp" alt="" width={50} height={50} style={{lineHeight:50}}/>
        </div>
        <ul id="menuList">
            <li><Link to="/">Boys</Link></li>
            <li><Link to="/girl">Girls</Link></li>
        </ul>
      
    </nav>

      <div className="carousel-container">
        <Carousel
          responsive={responsive}
          draggable={true}
          swipeable={true}
          customRightArrow={<CustomRightArrow/>}
          customLeftArrow={<CustomLeftArrow/>}
          afterChange={(previousSlide, { currentSlide }) => handleSlideChange(currentSlide)}
        >
          {images.map((candidate, index) => (
            <div key={index} style={{ position: "relative" }} className="img-container">
              <img src={candidate.imgSrc} className="carousel-image" alt={`Carousel Item ${index + 1}`} />
              <div
                className={`carousel-text ${
                  index >= activeIndex && index < activeIndex + visibleItems ? "animate" : ""
                }`}
              >
                <p>{candidate.name}</p>
                <p>Section-{candidate.section}</p>
                <p>Contestant No-{candidate.no}</p>
              </div>
            </div>
          ))}
        </Carousel>
        <div className="footer-container">
               <div id="outer-div"> 
                  
                   <div className="inner-div">2024-2025 UCSMGY FRESHER WELCOME</div>
                   <div style={{width:'80%',margin:'0 auto'}}>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dolorum reprehenderit, quidem nobis minus odio excepturi cum.
                      consectetur adipisicing haidh
                      </p>
                     
                   </div>
                    
                </div> 
         </div>
      </div>
    </div>
  );
};

export default Boy;
