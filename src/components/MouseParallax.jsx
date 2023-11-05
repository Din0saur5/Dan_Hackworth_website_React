import React from 'react'
import { Button } from 'react-bootstrap'
import { MouseParallaxChild, MouseParallaxContainer } from 'react-parallax-mouse'
import { Link } from 'react-router-dom'

const MouseParallax = ({content}) => {
    const {text, header, image, link, linkText} = content
    let linkTextDisplay = 'Launch Repositories'
    if(linkText.length>1){ linkTextDisplay=linkText}
  return (
    <div className='desktop'>
            
            <div
              style={{
                
                display: "flex",
                flexWrap:'wrap',
                justifyContent: 'space-between'
                
              }}
            >
              <h1 style={{ textAlign: "left", margin: "10px 0 0 20px" }}>
                {header}
              </h1>
              <MouseParallaxContainer
                className="parallax"
                containerStyle={{
                  position:'relative',
                  width: "auto",
                  display: "grid",
                  alignContent:"center",
                  height: '25vh',
                  
    
                }}
                globalFactorX={0.4}
                globalFactorY={0.4}
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
                  <img width={'80%'} height="30%" src={image} alt="" />
                </MouseParallaxChild>
              
                
              </MouseParallaxContainer>
              <div className='info'>
              <p>{text}</p>
              <Link style={{marginInlineStart:'70%', position:'relative',bottom:'10%'}} to={link}>{linkTextDisplay}</Link>
              </div>
          </div>
    
    </div>
  )
}

export default MouseParallax
