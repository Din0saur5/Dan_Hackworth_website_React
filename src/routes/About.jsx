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
      &emsp;My name is Daniel Hackworth. At 26 years old, originally from Redding, Connecticut, I've now reached an exciting milestone in my career journey, having recently graduated from Flatiron School as a software engineer. My time at Flatiron School has not only honed my technical skills but also solidified my passion for coding, which I approach with intuitive understanding and dedication.
      </p>
      <p className='about-text'>
      &emsp;I hold an Associate of Science degree in Horticulture from the Pennsylvania College of Technology in Williamsport, Pennsylvania. My diverse interests range from enjoying Renaissance fairs with my fiancée and crafting costumes to fitness and cooking. At home, my life is brightened by the presence of Kali, my spirited all-black Doberdor, whose lively and affectionate nature brings joy to every day.
         </p>
          
       <p className='about-text'> &emsp;Professionally, my journey has been unique and transformative. After my release from incarceration, a chapter that profoundly reshaped my outlook and spurred personal growth, I found purpose and connection as a dog walker and pet sitter. This role, which I fulfilled for nearly two years, was more than a job; it was a stepping stone to rebuilding my life and transitioning into a new chapter on acceptance to FlatIron School.
          </p>
          
          <p className='about-text'>   
          &emsp;My coding journey, which began in high school with a foray into programming and leading a robotics team. Some time passed, as I purused other interests but, took a pivotal turn back to programming when I faced the challenge of managing bookkeeping while battling Lyme disease. This challenge sparked the creation of a comprehensive bookkeeping program using JavaScript and Google Apps Script, complete with integrated APIs. This achievement marked the beginning of my dedication to software development.
           </p>
           <p className='about-text'> &emsp;
           Since then, I have embarked on several exciting projects, showcasing my expanded skill set. CozShare, a full-stack application using Flask and React, was inspired by my interest in building specialized social networks. My web app, Eatsy, demonstrates my ability to create stylish and intuitive designs for sharing recipes, incorporating modern security practices. Additionally, my involvement in DreamScape VR, a front-end forward web app for an innovative VR game, highlights my skills in creating dynamic user experiences. I've also developed Create-Hackworth-App, a tool to assist peers with integrating modern solutions in their projects.
        </p>
        <p className='about-text'>   
          &emsp;Now, as a graduate equipped with a robust portfolio of technical projects and a deep understanding of software engineering principles, I am eager to apply my skills in a professional setting. My journey has been marked by resilience, creativity, and a relentless pursuit of growth. I look forward to exploring opportunities where my unique blend of technical expertise, life experiences, and personal values can contribute significantly to innovative projects and teams.
           </p>
           
     <p className='about-text' style={{'textAlign':'center'}}>Thanks for reading! -- click to download my resume!
     <a href="/Daniel_Hackworth_Resume_2024.pdf" download>
      <img style={{height:'7rem'}} src="/Photos/resume-icon-png-19026.png" />
      </a>
      </p>
      </article>
      </div>
      
    </div>
  )
}

export default About
