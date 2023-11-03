import React from 'react'

import "../components/Portfolio.css"
import { MouseParallaxChild, MouseParallaxContainer } from 'react-parallax-mouse'
import { Button } from 'react-bootstrap'
import MouseParallax from '../components/MouseParallax'


const Portfolio = () => {
  const react = {
    header: 'React',
    image: '/portfolio-icons/react.png',
    text: "React is a powerful tool for front end develpoment. A framework of JavaScript, that helps modularize code for re-usablility and declarative structure."
  }

  const python = {
    header: 'Python',
    image: '/portfolio-icons/python.png',
    text: 'python is cool blah blah blah'
  }

  const ubuntu = {
   
  }

  const github = {

  }
  const other = {
    
  }

  const leftSide = '{'
  const rightSide = '}'
  return (
    <>
    <div className='deep-portfolio'>
      <p className='left-curly'>{leftSide}</p>
      <p className='right-curly'>{rightSide}</p>
    <div className='background' >
        <img className="headImg" src={'/Photos/programmer-cloud.png'}/> 
        <img src={'/Photos/scroll-down.png'} className = "animated"/>
    </div>
    
  <div style={{height:"200vh", display:"flex",  flexDirection:"column" }}>
      <div className='desc-box'>
      <div> 
        <div
          style={{
            height: "100%",
            display: "flex",
            flexWrap:'wrap',
            justifyContent: 'space-between'
            
          }}
          >
          <h1 style={{ textAlign: "left", margin: "0 0 20px 0" }}>
            HTML, CSS, & JavaScript
          </h1>
          <MouseParallaxContainer
            className="parallax"
            containerStyle={{
              position:'relative',
              width: "auto",
              display: "grid",
              
              
            }}
            globalFactorX={0.3}
            globalFactorY={0.3}
            resetOnLeave
            >
            
            <MouseParallaxChild
              factorX={0.7}
              factorY={0.7}
              style={{
                
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "auto",
                height: "fit-content"
              }}
              >
              <img width={'80%'} height="30%" src="/portfolio-icons/html.png" alt="" />
            </MouseParallaxChild>
            
            <MouseParallaxChild
              factorX={0.7}
              factorY={0.7}
              style={{
                
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "auto",
                height: "fit-content"
                
              }}
            >
              <img width={'80%'} src="/portfolio-icons/css.png" alt="" />
            </MouseParallaxChild>
                
            <MouseParallaxChild
              factorX={0.7}
              factorY={0.7}
              style={{
                
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "auto",
                height: "fit-content",
                padding: 0,
              }}
              >
              <img width='80%' height="32%" src="/portfolio-icons/js.png" alt="" />
            </MouseParallaxChild>
            
          </MouseParallaxContainer>
          <div className='info' style={{marginBlockStart:"-45%"}}>
          <p>sfguhuhuhuhuhuhuhuhuhuhuhuhuhuhuhuhuhuhuhuh
          huhuhuhuhuhuhuhuhuhuhuhuhuhuhuhuhuhhhhhhhhhhhh
          huhuhuhuhuhuhuhuhuhuhuhuhuhuhuhuhuhhhhhhhhhhhhhhhhhh
          huhuhuhuhuhuhuhuhuhuhuhuhuhuhuhuhuh
          huhuhuhuhuhuhuhuhuhuhuhuhuhuhuhuhuh
          huhuhuhuhuhuhuhuhuhuhuhuhuhuhuhuhuh
          
          
        
          </p>
         
          <Button>Launch Repos</Button>
            </div>
               
          </div>
          </div> 
      </div>
            
            <div className='desc-box'>
              <MouseParallax content={react}/>
            

            </div>
            <div className='desc-box'>
              <MouseParallax content={python}/>

            </div>
            <div className='desc-box'>
            <p>hello world</p>

            </div>
            
            <div className='desc-box'>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>

            </div>

        </div>
   
     
    </div>
    <div className='base-blocker'></div>
    </>
  )
}

export default Portfolio
