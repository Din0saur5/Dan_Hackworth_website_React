import React from 'react'
import Figure from 'react-bootstrap/Figure'

const About = () => {
  return (
    <div className='deep-about'>
      <div className="about">
        <article>
          <img
              
              alt="profile picture"
              src='/Photos/profile-picture.jpeg'
              className='profile-pic'
            />
            <br/> <br/>
      <p className='about-text initial'>
      &emsp;My name is Daniel Hackworth. I'm 26 years old,
       originally from Redding, Connecticut. 
      I am currently a student in Flatiron School for software engineering.
      I'm a passionate and intuitive study when it comes to coding.
      I am proficient in several coding languages but more on that later.
      </p>
      <p className='about-text'>
      &emsp;I earned my Associate of Science degree in Horticulture from the 
       Pennsylvania College of Technology in Williamsport, Pennsylvania. 
       Beyond my professional life, I enjoy Renaissance fairs with my fiancée, 
       crafting costumes, and spending time with my dog, Kali. Cooking and fitness
        are also among my passions. Kali, my spirited all-black Doberdor, adds joy
         to my life with her lively and affectionate nature.
         </p>
          
       <p className='about-text'> &emsp;For the past two years, I've been a dedicated dog walker and pet sitter.
         However, I'm now on the cusp of an exciting transition as I prepare for marriage 
        and starting a family. This motivates me to explore new career paths that align with
          my aspirations. My previous role as a dog walker helped me transition after my release from 
          incarceration, a chapter that profoundly reshaped my perspective and fostered personal growth.
           Embracing this experience, I've matured and committed myself to achieving my goals.
          My coding journey began gradually. In high school, I explored programming and even captained 
          the robotics team. 
          </p>
          
          <p className='about-text'>   
          &emsp;However, the real turning point came later when I faced a challenge – 
          managing bookkeeping while battling Lyme disease. This inspired me to create a program that 
          could simplify tasks. Seeking guidance from friends in computer science, I embarked on a mission to bring my vision to life.
          My first coding success was a comprehensive bookkeeping program crafted with JavaScript and Google
           Apps Script, featuring integrated APIs. 
           </p>
           <p className='about-text'> &emsp;
           This ignited my passion, leading to personal Python projects. 
           Currently, I'm engrossed in developing a 2D RPG game using Pygame, focusing on coding enemy AI from scratch. As well as, web design using HTML, CSS, and JavaScript. 

        My journey led me to the Flatiron School, recommended by a friend who also overcame legal challenges. 
        Now, as a software engineering student, I'm excited to explore more coding and possible avenues for a career. Currently, my enthusiasm lies in crafting AI algorithms, and I'm eager to discover where my unique skills can make a valuable contribution to any team. 
        </p>
     <p className='about-text' style={{'textAlign':'center'}}>Thanks for reading!</p>
     <a href="/Daniel_Hackworth_Resume_2024.pdf" download>
      <img src="/Photos/resume-icon-png-19026.png" />
      </a>
      </article>
      </div>
      
    </div>
  )
}

export default About
