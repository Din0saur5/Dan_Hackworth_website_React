import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "./Dashboard.css"


const PhotoCarousel = ({photoData}) => {

const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
    //add a dashview class to hide detailson the card also to make large when clicked
  };

  return (
    
    <Carousel activeIndex={index} onSelect={handleSelect} className='Carousel'touch={true} >
      <Carousel.Item className='carousel-item'>
        <img src='/Photos/engagment_photo.jpg' alt='engagment photo' className='gallery-icon'/>
        
      </Carousel.Item>
      <Carousel.Item className='carousel-item'>
        <img src= "/Photos/kali.jpg" alt='second pic' className='gallery-icon'/>
    
      </Carousel.Item>
      <Carousel.Item className='carousel-item'>
        <img src="/Photos/barbarian_dan.jpg" alt='third pic' className='gallery-icon' />
        
      </Carousel.Item>
    </Carousel>
  );
}

export default PhotoCarousel
