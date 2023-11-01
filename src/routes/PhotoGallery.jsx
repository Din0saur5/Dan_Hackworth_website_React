import React, { useState } from 'react'
import photoData from '../photoData';
import '../App.css'
import MyModal from '../components/MyModal';





const PhotoGallery = () => {

 
//decided to make my own 
//start with photo grid and 
//MdOutlineArrowBackIosNew icons
//MdOutlineArrowForwardIos icons
const [selectedImage, setSelectedImage] = useState({src:"", alt:""})
const [currentIndex, setCurrentIndex] = useState(-1)
const [modalShow, setModalShow] = useState(false);

const handleClickPhoto = (photo,index) => {
  setCurrentIndex(index)
  setSelectedImage(photo)
  setModalShow(true)
  console.log(modalShow, index, photo)
}


const handeChangeSelcetion = (direction, index,) => {
  
}


  return (
    <div className='deep-gallery'>
      <div className='photo-gallery'>
        <div className="gallery-row">
          <div className='gallery-col'>
          {photoData.slice(0,5).map((photo, index)=>{
            return(<><img onClick={()=>{handleClickPhoto(photo, index)}} key={index} src={photo.src} alt={photo.alt} className='gallery-images' />
          </>
            )})}
          </div>
          <div className="gallery-col">
          {photoData.slice(5,10).map((photo, index)=>{
            return(<><img onClick={()=>{handleClickPhoto(photo, index)}} key={index} src={photo.src} alt={photo.alt} className='gallery-images' />
          </>
            )})}
          </div>
          <div className="gallery-col">
          {photoData.slice(10,14).map((photo, index)=>{
            return(<><img onClick={()=>{handleClickPhoto(photo, index)}} key={index} src={photo.src} alt={photo.alt} className='gallery-images' />
          </>
            )})}
          </div>
          <div className="gallery-col">
          {photoData.slice(14,18).map((photo, index)=>{
            return(<><img onClick={()=>{handleClickPhoto(photo, index)}} key={index} src={photo.src} alt={photo.alt} className='gallery-images' />
          </>
            )})}
          </div>



        </div>
        <MyModal selectedImage={selectedImage} currentIndex={currentIndex} onHide={() => setModalShow(false)} show={modalShow}/>
      </div>
    </div>  
  )
}

export default PhotoGallery
