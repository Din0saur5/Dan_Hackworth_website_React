import React from 'react'

import "../components/Portfolio.css"
import { MouseParallaxChild, MouseParallaxContainer } from 'react-parallax-mouse'
import { Button } from 'react-bootstrap'
import MouseParallax from '../components/MouseParallax'
import MobilePortfolio from '../components/MobilePortfolio'
import { Link } from 'react-router-dom'


const Portfolio = () => {

  const htmlJsCss = {
    header: 'HTML, CSS, & JavaScript',
    image: '/portfolio-icons/front-end-trio.png',
    text: `JavaScript, HTML, and CSS form the essential trio for web development. JavaScript adds dynamic functionality and interactivity to web pages, while HTML structures and defines the content. CSS, on the other hand, is responsible for styling and presentation, ensuring a visually appealing user experience. My experience with web development started here from creating my first Google-App-Scripts spreadsheet scripts to making my first webpage and API requests. Some of my earliest work is found in these Repositories!`,
    link: `https://github.com/Din0saur5?tab=repositories&q=phase&type=&language=&sort=`,
    linkText: ''
  }



  const react = {
    header: 'React',
    image: '/portfolio-icons/react.png',
    text: `React is a powerful tool for front-end development, a JavaScript framework that excels in creating modular, reusable code with a declarative structure. I've particularly enjoyed working with React because of its efficiency in developing interactive and dynamic user interfaces. I've honed my skills in incorporating various compatible libraries, such as Bootstrap, to enhance the visual appeal and functionality of my projects. In fact, I used React to build this website, showcasing how this framework is a driving force behind my web development journey.`,
    link: 'https://github.com/Din0saur5?tab=repositories&q=react&type=&language=&sort=',
    linkText: ''
  }

  const python = {
    header: 'Python',
    image: '/portfolio-icons/python.png',
    text: 'Python is a versatile and high-level programming language renowned for its robust capabilities in data analysis. It excels in simplifying the process of scripting and developing algorithms, making it a top choice for both beginners and experts in the programming world. I have used it personally in a game I am creating with the pygame library and my own AI model that I designed and created.',
    link: 'https://github.com/Din0saur5?tab=repositories&q=&type=&language=python&sort=',
    linkText: ''
  }

 

  const github = {
    header: 'Github',
    image: '/portfolio-icons/github.png',
    text:`GitHub is my go-to platform for managing and showcasing my portfolio of projects. It's not just a personal showcase; it's where I collaborate with other developers too. From branching for features to merging contributions, it makes teamwork easy and efficient.`
    ,link: 'https://github.com/Din0saur5?tab=repositories',
    linkText: 'All Repositories'
  }
  const other = {
    header: 'Foundational Tools',
    image: '/portfolio-icons/VSC.png',
    text: "To navigate the diverse realm of programming languages, I rely on Ubuntu with Linux as my foundational platform. It acts as the canvas for my coding endeavors. Npm, the JavaScript package manager, is my versatile toolbox for library management. Vite expedites my web projects with its  development server.  I use Visual Studio Code (VSC) as my editor. These tools collectively guarantee a seamless and productive coding experience. Future endeavors involve delving into backend development using Python at Flatiron School and exploring Node.js independently.",
    link: 'https://github.com/Din0saur5',
    linkText: 'Github Overview'
    
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
      <div className='desc-box'  >
      <div className='desktop'> 
        <div 
          style={{
            
            display: "flex",
            flexWrap:'wrap',
            justifyContent: 'space-between',
            alignContent: 'center',
      
            
          }}
          >
          <h1 style={{ textAlign: "left", width:'80%', margin: "0 0 0 20px" }}>
            HTML, CSS, & JavaScript
          </h1>
          <div style={{ wordBreak:"normal", width:'60%' }}>
          <p  style={{marginBlockStart: '5%', marginLeft: '10%', lineHeight: '2'}}>JavaScript, HTML, and CSS form the essential trio for web development. JavaScript adds dynamic functionality and interactivity to web pages, while HTML structures and defines the content. CSS, on the other hand, is responsible for styling and presentation, ensuring a visually appealing user experience. My experience with web development started here from creating my first Google-App-Scripts spreadsheet scripts to making my first webpage and API requests. Some of my earliest work is found in these Repositories!
           </p>
           <p>
           <a style={{marginInlineStart:'50%', position:'relative',bottom:'5%'}} href={htmlJsCss.link}>Launch Repositories</a>
           </p>
            </div>
          <MouseParallaxContainer
            className="parallax"
            containerStyle={{
              position:'relative',
              width: "auto",
              display: "grid",
              height: '60vh',
              alignContent: 'center',
              marginBlockStart: "-8%",
            }}
            globalFactorX={0.3}
            globalFactorY={0.3}
            resetOnLeave
            >
            
            <MouseParallaxChild
              factorX={0.4}
              factorY={0.3}
              style={{
                
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "auto",
                height: "fit-content"
              }}
              >
              <img width='60%' src="/portfolio-icons/html.png" alt="" />
            </MouseParallaxChild>
            
            <MouseParallaxChild
              factorX={0.6}
              factorY={0.3}
              style={{
                
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "auto",
                height: "fit-content"
                
              }}
            >
              <img width='60%'src="/portfolio-icons/css.png" alt="" />
            </MouseParallaxChild>
                
            <MouseParallaxChild
              factorX={0.8}
              factorY={0.4}
              style={{
                
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "auto",
                height: "fit-content",
               
              }}
              >
              <img width='60%' src="/portfolio-icons/js.png" alt="" />
            </MouseParallaxChild>
            
          </MouseParallaxContainer>
          
               
          </div>
          </div>
          <MobilePortfolio content={htmlJsCss}/> 
      </div>
            
            <div className='desc-box'>
              <MouseParallax className='desktop' content={react}/>
              <MobilePortfolio className='mobile' content={react}/>

            </div>
            <div className='desc-box'>
              <MouseParallax className='desktop' content={python}/>
              <MobilePortfolio className='mobile' content={python}/>
            </div>
            <div className='desc-box'>
            <MouseParallax className='desktop' content={github}/>
            <MobilePortfolio className='mobile' content={github}/>
            </div>
            
            <div className='desc-box'>
            <MouseParallax className='desktop' content={other}/>
            <MobilePortfolio className='mobile' content={other}/>
            </div>

        </div>
   
     
    </div>
    <div className='base-blocker'></div>
    </>
  )
}

export default Portfolio
