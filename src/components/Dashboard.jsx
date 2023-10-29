import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import "./Dashboard.css"
import PhotoCarousel from './PhotoCarousel'
import { Link } from 'react-router-dom'
const DashBoard = () => {
  //photo Gallery
      
    //meet me 

let latestPost='https://dev.to/din0saur5'
      // latest blog post 
  return (
    
    
    <Container className='dashboard' id="dashboard">
      <br/>
      <Row>
        <Col sm={8}>
        
          <Card 
            border='light'   
            text='light'
            bg='dark'
            className="mb-2 dash-Card">
            <Card.Header>Photo Gallery</Card.Header>
            <Card.Body>
              <PhotoCarousel/>
               <Link to="/AllPhotos" style={{"textDecoration":"none"}}><Button>View All Photos</Button></Link>
            </Card.Body>
          </Card>
          
          </Col>
        <Col sm={4}>
         <Link style={{"textDecoration":"none"}} to="/About">
          <Card 
            text='dark'
            bg='light'
            className="mb-2 dash-Card">
            <Card.Img variant='top' src='../../public/profile-picture.jpeg'></Card.Img>
            <Card.Body>
             <Card.Title> About Me </Card.Title>
              <Card.Text className="card-text">
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          </Link>
          </Col>
      </Row>
      
      <Row>
        <Col>
        <a style={{"textDecoration":"none"}} href={latestPost}>
          <Card 
            text='dark'
            bg='light'
            className="mb-2 dash-Card">
            <Card.Header>Blog</Card.Header>
            <Card.Body>
              <Card.Title> Card Title </Card.Title>
              <Card.Text className="card-text">
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          </a>
        </Col>
      </Row>
    
      
    </Container>
  )
}

export default DashBoard
