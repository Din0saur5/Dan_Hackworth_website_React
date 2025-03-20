import React from 'react'
import Figure from 'react-bootstrap/Figure'

const About = () => {
  return (
    <div className='deep-about'>
      <div className="about">
        <article>
          <img
              
              alt="profile picture"
              src='/Photos/00014-headshot.jpg'
              className='profile-pic'
            />
            <br/> <br/>
      <p className='about-text initial'>
      &emsp;My name is Daniel Hackworth, a 27-year-old software engineer, CTO, and project manager based in Winchester, Connecticut. My journey into software development has been shaped by resilience, adaptability, and a passion for leveraging technology to solve real-world problems.</p>
      <p className='about-text'>
      &emsp;I graduated from Flatiron School with a focus on full-stack development, reinforcing my technical foundation in Python, Flask, JavaScript, React, SQL, and AI integration. Since then, I've co-founded Patterson & Hackworth Digital Solutions, a digital marketing and web development firm, where I build AI-integrated chatbots and scalable applications for nonprofits and small businesses. </p>
          
       <p className='about-text'> &emsp;Beyond that, I serve as Senior-Lead Engineer & Project Manager at Pinpoint, where I lead development teams, oversee project workflows, and integrate machine learning to enhance functionality. My role as Head of Community at UpskillHero allows me to bridge technology and user engagement, managing beta testers, gathering feedback, and optimizing platform growth.</p>
          
          <p className='about-text'>   
          &emsp;In addition to software development, I am currently working with Meehan Law as a Tech Consultant & Forensic Accounting Consultant on a high-profile civil case. My role involves analyzing financial records, investigating data discrepancies, and providing technical expertise to support legal proceedings. This work has allowed me to apply my problem-solving skills in a legal context, ensuring data integrity and uncovering critical insights.</p>
           <p className='about-text'> &emsp;
           My path to this point has been unconventional but deeply rewarding. After overcoming personal challenges, I found my footing as a software engineer, turning my passion for problem-solving into a career. Whether developing AI-driven business tools, building automation systems, or scaling web applications, I thrive at the intersection of technology and impact.</p>
        <p className='about-text'>   
          &emsp;When I’m not coding, I enjoy Renaissance fairs, costume crafting, fitness, and cooking. At home, my Doberdor, Kali, ensures life is never dull. </p>
           
     <p className='about-text' style={{'textAlign':'center'}}>Thanks for reading! -- click to download my resume!
     <a href="/Daniel_Hackworth_Resume_2025.pdf" download>
      <img style={{height:'7rem'}} src="/Photos/resume-icon-png-19026.png" />
      </a>
      </p>
      </article>
      </div>
      
    </div>
  )
}

export default About
