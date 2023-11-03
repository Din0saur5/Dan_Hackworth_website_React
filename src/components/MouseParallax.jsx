import React from 'react'
import { Button } from 'react-bootstrap'
import { MouseParallaxChild, MouseParallaxContainer } from 'react-parallax-mouse'

const MouseParallax = ({content}) => {
    const {text, header, image} = content
  return (
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
                {header}
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
                  <img width={'80%'} height="30%" src={image} alt="" />
                </MouseParallaxChild>
              
                
              </MouseParallaxContainer>
              <div className='info'>
              <p>{text}</p>
              
              <Button>Launch Repos</Button>
              </div>
          </div>
    
    </div>
  )
}

export default MouseParallax
