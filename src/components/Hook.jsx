import React from 'react';
import './Hook.css';
import { HashLink } from 'react-router-hash-link';


function Hook() {
  return (
    <>
     
    <div className='hook-container' >
      <video src="/website-header.mp4" autoPlay loop muted />
  
      <h1>INNOVATION AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hook-btns'>
        <HashLink smooth to="#dashboard">
        <button
          className='btn--outline btn--large'
          
        >
          View DashBoard 
        </button>
        </HashLink>
      </div>
      
    </div>
    
    </>
  );
}

export default Hook;