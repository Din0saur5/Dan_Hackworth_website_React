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
    
    <Carousel activeIndex={index} onSelect={handleSelect} className='Carousel' touch={true} >
     {photoData.slice(0,5).map(photo=>{
        return (<Carousel.Item key={photo.id} className='carousel-item'>
        <img src={photo.src} alt={photo.alt} className='gallery-icon'/>
    
      </Carousel.Item>
      )
     })}
      
    </Carousel>
  );
}

export default PhotoCarousel
