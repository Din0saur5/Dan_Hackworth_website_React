import React from 'react'

import "../components/Portfolio.css"


const Portfolio = () => {
  const leftSide = '{'
  const rightSide = '}'
  return (
    <>
    <div className='deep-portfolio'>
      <p className='left-curly'>{leftSide}</p>
      <p className='right-curly'>{rightSide}</p>
    <div className='background' >
      
        <img className="headImg" src={'/Photos/programmer-cloud.png'}/>
        
        </div>
        <div style={{height:"200vh", display:"flex",  flexDirection:"column"}}>
            <div className='desc-box'>
              <p>hello world</p>

            </div>
            
            <div className='desc-box'>
            <p>hello world</p>

            </div>
            <div className='desc-box'>
            <p>hello world</p>

            </div>
            <div className='desc-box'>
            <p>hello world</p>

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
