import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "./Dashboard.css"


const PhotoCarousel = () => {

const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
    //add a dashview class to hide detailson the card also to make large when clicked
  };

  return (
    
    <Carousel activeIndex={index} onSelect={handleSelect} className='Carousel'>
      <Carousel.Item className='carousel-item'>
        <img src='../../public/Photos/engagment_photo.jpg' alt='engagment photo' className='gallery-icon'/>
        
      </Carousel.Item>
      <Carousel.Item className='carousel-item'>
        <img src= "../../public/Photos/kali.jpg" alt='second pic' className='gallery-icon'/>
    
      </Carousel.Item>
      <Carousel.Item className='carousel-item'>
        <img src="../../public/Photos/barbarian_dan.jpg" alt='third pic' className='gallery-icon' />
        
      </Carousel.Item>
    </Carousel>
  );
}

export default PhotoCarousel
