import React, { useState } from 'react'
import photoData from '../photoData';
import '../App.css'
import Lightbox from '../components/Lightbox';





const PhotoGallery = () => {

 
//decided to make my own 
//start with photo grid and 
//MdOutlineArrowBackIosNew icons
//MdOutlineArrowForwardIos icons
const [selectedImage, setSelectedImage] = useState({src:"", alt:"",caption:'', id:0})
const [modalShow, setModalShow] = useState(false);

const handleClickPhoto = (photo) => {
  setSelectedImage(photo)
  setModalShow(true)
  
  
}


const handeChangeSelection = (direction) => {
  
  let imageId = selectedImage.id + direction
  let lightboxDisplay
  if(imageId === 0){ setSelectedImage(photoData[photoData.length-1])}
  else if(imageId > photoData.length){ setSelectedImage(photoData[0])}    
  else{
    lightboxDisplay = photoData.filter((photo)=> photo.id === (imageId))
    console.log("change "+ selectedImage.id +" to " + lightboxDisplay[0].id)
    setSelectedImage(lightboxDisplay[0])
  }
}


  return (
    <div className='deep-gallery'>
      <div className='photo-gallery'>
        <div className="gallery-row">
          <div className='gallery-col'>
          {photoData.slice(0,6).map((photo)=>{
            return(<><img onClick={()=>{handleClickPhoto(photo)}} key={photo.id} src={photo.src} alt={photo.alt} className='gallery-images' />
          </>
            )})}
          </div>
          <div className="gallery-col">
          {photoData.slice(6,11).map((photo)=>{
            return(<><img onClick={()=>{handleClickPhoto(photo)}} key={photo.id} src={photo.src} alt={photo.alt} className='gallery-images' />
          </>
            )})}
          </div>
          <div className="gallery-col">
          {photoData.slice(11,16).map((photo)=>{
            return(<><img onClick={()=>{handleClickPhoto(photo)}} key={photo.id} src={photo.src} alt={photo.alt} className='gallery-images' />
          </>
            )})}
          </div>
          <div className="gallery-col">
          {photoData.slice(16,22).map((photo)=>{
            return(<><img onClick={()=>{handleClickPhoto(photo)}} key={photo.id} src={photo.src} alt={photo.alt} className='gallery-images' />
          </>
            )})}
          </div>



        </div>
        <Lightbox handeChangeSelection={handeChangeSelection} length= {photoData.length} selectedImage={selectedImage} onHide={() => setModalShow(false)} show={modalShow}/>
      </div>
    </div>  
  )
}

export default PhotoGallery
