import React from 'react';
import './Hook.css';
import './Button.css';
import { HashLink } from 'react-router-hash-link';
import { useMediaQuery } from "@uidotdev/usehooks";

function Hook() {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  let mobile 
  isSmallDevice? mobile= 'mobile': mobile=''
  console.log(mobile)
  return (
    <>
     
    <div className={`hook-container ${mobile}`}  >
      {isSmallDevice? 
        <div></div>:<video className={mobile} src="/website-header.mp4" autoPlay loop muted /> 
      }
      
  
      <h1>INNOVATION AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hook-btns'>
        <HashLink smooth to="#dashboard">
        <div className='btn--outline btn--large'>
          View DashBoard 
        </div>
        </HashLink>
      </div>
      
    </div>
    
    </>
  );
}

export default Hook;