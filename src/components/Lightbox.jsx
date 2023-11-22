import React, { Fragment } from 'react'
import { Button, Image, Modal, } from 'react-bootstrap'
import './Lightbox.css'
import {MdOutlineArrowBackIosNew} from 'react-icons/md'
import {MdOutlineArrowForwardIos} from 'react-icons/md'
const Lightbox = ({length, selectedImage, handeChangeSelection, show, onHide}) => {
  const {src, id, alt, caption} = selectedImage
  return (
    <>
      <Modal
      
        fullscreen={'xl-down'}
        show={show}
        onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      
    >
      <Modal.Header closeButton >
        <Modal.Title id="contained-modal-title-vcenter noSelect"  >  
         {selectedImage? alt:''}
        </Modal.Title>
      </Modal.Header >
      <Modal.Body className='lightbox-frame' >
      <Image className='selected-image noSelect' src={src} alt={alt} />
        <div className='flex-container'>
          
          <div className="lightbox-col left" onClick={()=>{
            const direction = -1;
            handeChangeSelection(direction)}}>
          <MdOutlineArrowBackIosNew style={{"height":'60vh', "width":'2vw'}}/>
          </div>
          <div className="lightbox-col right "  onClick={()=>{
             const direction = 1;
            handeChangeSelection(direction)}}>
         <MdOutlineArrowForwardIos style={{"height":'60vh', "width":'2vw'}}/>
         
         </div>
        </div>

      </Modal.Body>
      <Modal.Footer  >
        <p >{caption} &nbsp; {id}/{length}</p>
      </Modal.Footer>
    </Modal>
  

    </>
  )
}

export default Lightbox
