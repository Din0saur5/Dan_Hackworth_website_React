import React, { Fragment } from 'react'
import { Button, Col, Image, Modal, Row } from 'react-bootstrap'
import './MyModal.css'
import {MdOutlineArrowBackIosNew} from 'react-icons/md'
import {MdOutlineArrowForwardIos} from 'react-icons/md'
const MyModal = ({selectedImage, currentIndex, show, onHide}) => {
  return (
    <>
      <Modal
      
        fullscreen={'sm-down'}
        show={show}
        onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      
    >
      <Modal.Header closeButton >
        <Modal.Title id="contained-modal-title-vcenter"  >  
         {selectedImage? selectedImage.alt:''}
        </Modal.Title>
      </Modal.Header >
      <Modal.Body >
        <Row>
          
          <Col md="auto">
        <Image className='selected-image' src={selectedImage.src} alt='{selectedImage.alt}' fluid />
        </Col>
        <Col xs lg="2" >
          <MdOutlineArrowBackIosNew/>
          </Col>
          <Col xs lg="7" className='spacer'></Col>
          <Col xs lg="2" ><MdOutlineArrowForwardIos/></Col>
        </Row>

      </Modal.Body>
      <Modal.Footer  >
        <p >a caption about the photograph</p>
      </Modal.Footer>
    </Modal>
  

    </>
  )
}

export default MyModal
