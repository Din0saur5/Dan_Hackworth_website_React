import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, OverlayTrigger, Row, Tooltip } from 'react-bootstrap'
import "./Dashboard.css"
import PhotoCarousel from './PhotoCarousel'
import { Link } from 'react-router-dom'
import photoData from '../photoData';



const DashBoard = () => {
  const [blogPost, setBlogPost] = useState({});

  useEffect(() => {
    fetch("https://dev.to/api/articles?username=din0saur5")
      .then((response) => response.json())
      .then((data) => {
        const {canonical_url, title, description, tag_list, reading_time_minutes, readable_publish_date} = data[0]
        let emojiArray = []
        const tick = Math.ceil(reading_time_minutes)
            for(let i = 0; i<(tick); i++){
                emojiArray.push("☕️")  
            }
       const emojiTime = emojiArray.join('')
       const tags = tag_list.map((tag)=>
        `#${tag}`).join(' ');
          

        const postData = {
          url: canonical_url,
          title: title,
          description: description,
          tagList: tags,
          readTime: reading_time_minutes,
          date: readable_publish_date,
          emojiTime: emojiTime,

        }
        
        setBlogPost(postData);
      });
  }, []);
      
 



     
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
              <PhotoCarousel photoData={photoData}/>
               <Link to="/AllPhotos" onClick={()=>{window.scrollTo(0, 0)}} style={{"textDecoration":"none"}}><Button>View All Photos</Button></Link>
            </Card.Body>
          </Card>
          
          </Col>
        <Col sm={4}>
         <Link style={{"textDecoration":"none"}} to="/About" onClick={()=>{window.scrollTo(0, 0)}}>
          <Card 
          
            text='dark'
            bg='light'
            className="mb-2 dash-Card">
            <Card.Img variant='top' src='../../public/Photos/profile-picture.jpeg'></Card.Img>
            <Card.Body>
             <Card.Title> About Me </Card.Title>
              <Card.Text className="card-text">
              My name is Daniel Hackworth. I'm 26 years old, originally from Redding,
               Connecticut. I am currently a student in Flatiron School for software engineering.
                I'm a passionate and intuitive study when it comes to coding.
                I am proficient in several coding languages but more on that later...
              </Card.Text>
            </Card.Body>
          </Card>
          </Link>
          </Col>
      </Row>
      
      <Row  md="auto">
        <Col>
        <a style={{"textDecoration":"none"}} href={blogPost.url} >
          <Card 
            text='dark'
            bg='light'
            className="mb-2 dash-Card">
            <Card.Header style={{"fontSize":"22pt"}}>Latest Blog Post</Card.Header>
            <Card.Body>
              <Card.Title> {blogPost.title} <span className='mobile'>&nbsp; read time: {blogPost.emojiTime}  </span> </Card.Title> 
              <Card.Text className="card-text">
                <p> published {blogPost.date} &bull;  
                <OverlayTrigger
                    key='top'
                    placement='top'
                    overlay={
                    <Tooltip id={`tooltip-top`}>
                       <strong>{blogPost.readTime} min</strong>.
                    </Tooltip>
                  }>
                    <span>  &nbsp; read time: {blogPost.emojiTime}</span>
                  </OverlayTrigger>  </p>
                  <p>{blogPost.tagList}</p>
                {blogPost.description}<br/>
                
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
